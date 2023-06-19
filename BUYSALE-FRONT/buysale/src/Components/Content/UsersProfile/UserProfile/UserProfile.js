import React from "react";
import style from './UserProfile.module.css';
import noname from './../../../../../src/assets/images/noname.png';
import { NavLink } from 'react-router-dom';
import axios from "axios";

class UserProfile extends React.Component {
    
    debugger;
    clickFollowUser = () => {
        this.props.onFollowUser(this.props.id);
    };

    clickUnfollowUser = () => {
        this.props.onUnfollowUser(this.props.id);
    }
    render(){
    return(
        <div className={style.anketItem}>
        <div className={style.usersContent}>
            <div>
                <div>
                    <NavLink to={"/profile/"+this.props.id}>
                        { this.props.avatar != null ? <img src={this.props.avatar} className={style.avatar}/> : <img src={noname} className={style.avatar}/>}
                    </NavLink>
                </div>
                {this.props.followed ?  <button onClick={()=>{
                        axios.post("https://localhost:44367/profile/follow-unfollow", {
                            follow   : false,
                            id       : this.props.id

                        }).then(function(response){
                            if(response.status === 200){
                                if(response.data.resultStatus === 0){
                                    alert("Success");
                                    this.clickUnfollowUser();
                                }

                                else{
                                    alert(response.data.err5orMessage);
                                }
                            }
                        })
                        .catch((error)=>{
                            debugger;
                            alert("Error " + error.message);
                        })
                    }
                        
                        // this.clickUnfollowUser
                    }>Unfollow</button> : <button onClick={()=>{
                        axios.post("https://localhost:44367/profile/follow-unfollow", {
                            follow   : true,
                            id       : this.props.id

                        }).then(function(response){
                            if(response.status === 200){
                                if(response.data.resultStatus === 0){
                                    alert("Success");
                                    this.clickFollowUser();
                                }

                                else{
                                    alert(response.data.err5orMessage);
                                }
                            }
                        })
                        .catch((error)=>{
                            debugger;
                            alert("Error " + error.message);
                        })
                    }
                        
                        // this.clickFollowUser
                    }>Follow</button>}
                
            </div>
            <div>
                <div>
                    <p>{this.props.name}</p> 
                </div>
                <div>
                    <p>{this.props.status}</p> 
                </div>
            </div>
            <div>
                <div>
                    <p>{this.props.country}</p> 
                </div>
                <div>
                    <p>{this.props.city}</p> 
                </div>
            </div>
        </div>
        </div>
    );
    }
}

export default UserProfile;