import React from "react";
import axios from "axios";
import Header from "./Header";
import { connect } from "react-redux";
import {setUserData} from './../../BLL/Reduces/AuthReducer';
import { CheckAuth } from "../../DAL/API/api";

class HeaderAPIContainer extends React.Component{
    yourConfig = {
        headers: {
           Authorization: "Bearer " + this.props.auth.token
        }
    }

    componentDidMount(){
        CheckAuth(this.yourConfig)
                    .then((response) => {
                        // alert("showUsers function status: " + false);
                        // this.props.onChangeFetchingStatus(false);
                        console.log(response.status);
                        if(response.status === 200){
                            // console.log(response.data);
                            // console.log(this.props);
                            // alert("Auth success " + response.status);
                            if(response.data.resultStatus === 0){
                                alert("data in console");
                                console.log(response.data);
                                let usData = {
                                    email : response.data.email,
                                    token : response.data.token,
                                    userId : response.data.userId,
                                    login : response.data.userName,
                                    authStatus : response.data.authStatus
                                };
                                this.props.setUserData(usData);
                            }

                            else{
                                alert(response.data.errorMessage);
                            }
                        }
                        else if(response.status === 401){
                            alert("Unauthorize " + response.status);
                        }
                        else{
                            alert("Error exception");
                        }
                        
    
                    }).catch((error)=>{
                        if (error.response.status){
                            alert("Please authorise");
                        }
                    });
    }
    
    render(){
        return(
            <Header {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => {
    debugger;
    return {
        auth : state.auth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData : (userData) => {
            dispatch(setUserData(userData));
        }
    };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIContainer)

export default HeaderContainer;  