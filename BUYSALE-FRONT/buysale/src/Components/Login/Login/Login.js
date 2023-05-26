import React from "react";

const Login = (props) => {
    let valueLogin = React.createRef();
    let valuePassword = React.createRef();
    let tryLogin = () => {
        props.tryLoginPass(valueLogin.current.value, valuePassword.current.value);
        // console.log(props);
    }
    return(<div>
        <div><input type="text" placeholder="Login" ref={valueLogin}/></div>
        <div><input type="password" placeholder="Password" ref={valuePassword}/></div>
        <div><button onClick={tryLogin}>Login</button></div>
    </div>);
}

export default Login;