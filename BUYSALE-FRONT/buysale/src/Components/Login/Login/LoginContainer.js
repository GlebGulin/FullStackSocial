import React from "react";
import Login from "./Login";
import axios from "axios";
import { connect } from "react-redux";

class LoginAPIContainer extends React.Component{
    componentDidMount =() =>{
        console.log(this.props);
    }
    tryLoginPass(log, pass){
        alert(log + "and" + pass);
        axios.post("https://localhost:44367/auth/login", {
            login: log,
            password : pass
        })
            .then(function (response) {
                console.log(response);
                if (response.data.resultStatus === 0){
                    alert(response.data.token);
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
            <Login tryLoginPass ={this.tryLoginPass}/>
        </div>);
    }
}

 

// const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginAPIContainer)
export default LoginAPIContainer;

