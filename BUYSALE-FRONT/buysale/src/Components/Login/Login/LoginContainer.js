import React from "react";
import Login from "./Login";
import axios from "axios";
import { connect } from "react-redux";
import { setAuthToken, setUserData } from "../../../BLL/Reduces/AuthReducer";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { LoginUser } from "../../../DAL/API/api";

class LoginAPIContainer extends React.Component{
    componentDidMount =() =>{
        console.log("");
        console.log(this.props);
    }
    tryLoginPass(log, pass){
        alert(log + "and" + pass);
        // axios.post("https://localhost:44367/auth/login", {
        //     login: log,
        //     password : pass
        // })
        LoginUser(log, pass)
            .then(function (response) {
                console.log(response);
                if (response.data.resultStatus === 0){
                    console.log(response.data.token);
                    alert(this);
                    // this.props.setAuthToken(response.data.token);
                }
                else{
                    alert(response.data.errorMessage);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render(){
        return(<div>
            <Login tryLoginPass ={this.tryLoginPass} props={this.props}/>
        </div>);
    }
}

let mapStateToProps = (state) => {
    debugger;
    console.log("print state");
    console.log(state);
    return {
        auth : state.auth
    };
}

let mapDispatchToProps = (dispatch) => {
    console.log("print dispatch");
    console.log(dispatch);
    return {
        setAuthToken : (token) => {
            dispatch(setAuthToken(token));
        },
        setUserData : (userData) => {
            dispatch(setUserData(userData));
        }
    };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPIContainer)
export default LoginContainer;

