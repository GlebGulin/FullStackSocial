import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Login = (props) => {
    const navigate = useNavigate();
    console.log("Props in login component");
    console.log(props);
    let valueLogin = React.createRef();
    let valuePassword = React.createRef();
    let tryLogin = () => {
        props.tryLoginPass(valueLogin.current.value, valuePassword.current.value);
        // console.log(props);
    }
    return(<div>
        <div><input type="text" placeholder="Login" ref={valueLogin}/></div>
        <div><input type="password" placeholder="Password" ref={valuePassword}/></div>
        <div><button onClick={()=> {
            
            axios.post("https://localhost:44367/auth/login", {
                login: valueLogin.current.value,
                password : valuePassword.current.value
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.resultStatus === 0){
                        console.log(response.data.token);
                        props.props.setAuthToken(response.data.token);
                        var yourConfig = {
                            headers: {
                               Authorization: "Bearer " + response.data.token
                            }
                        }
                        axios.get(`https://localhost:44367/auth/check-auth`, yourConfig)
                        .then(function (response2)  {
                            console.log(response2.status);
                            if(response2.status === 200){
                                if(response2.data.resultStatus === 0){
                                    alert("data in console");
                                    console.log(response2.data);
                                    let usData = {
                                        email : response.data.email,
                                        token : response.data.token,
                                        userId : response.data.userId,
                                        login : response.data.login,
                                        authStatus : response.data.authStatus
                                    };
                                    console.log("User info");
                                    console.log(usData);
                                    props.props.setUserData(usData);
                                    
                                    navigate('/profile');
                                }

                                else{
                                    alert(response2.data.errorMessage);
                                }
                            }
                            else if(response2.status === 401){
                                alert("Unauthorize " + response.status);
                            }
                            else{
                                alert("Error exception");
                            }
                            
        
                        }).catch((error)=>{
                            // if (error.response.status){
                                alert("Please authorise");
                                alert(error);
                            // }
                        });
                    }
                    else{
                        alert(response.data.errorMessage);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })}
            }>Login</button></div>
            <div>
                <button onClick={()=>{
                    navigate('/register');
                }}>Register</button>
            </div>
    </div>);
}

export default Login;