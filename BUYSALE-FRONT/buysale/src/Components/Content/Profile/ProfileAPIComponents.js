import React from "react";
import axios from "axios";
import ProfilePart from './ProfilePart/ProfilePart';
import { GetUser } from "../../../DAL/API/api";

let baseURL = "https://localhost:44367/profile/get-profile";

class ProfileAPIComponent extends React.Component{
    componentDidMount(){
        this.GetprofileInfo();
    };
    
    GetprofileInfo(){
        console.log(this.props);
        alert("Getting info profile");
        debugger;
        var url = `${baseURL}?id=${this.props.match.params.id}`;
        if (this.props.match.params.id == undefined){
            url = `${baseURL}`;
        }
        alert(url);
        // var url = `${baseURL}`;
        console.log("URL");
        console.log(url);
        // axios.get(url)
        GetUser(this.props.match.params.id)
                    // axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                    .then((response) => {
                        // alert("showUsers function status: " + false);
                        //this.props.onChangeFetchingStatus(false);
                        console.log(response.status);
                        if(response.status === 200){
                            console.log(response.data);
                            console.log("axios to server");
                            this.props.setprofile(response.data);
                        }
                        else{
                            alert(response.errorMessage);
                        }
                        
    
                    }).catch(()=>{
                        alert("error");
                    });

    };
    render(){
        return(<div>
            <ProfilePart state={ this.props.profilePage.profileData }/>
        </div>);
    }
}

export default ProfileAPIComponent;