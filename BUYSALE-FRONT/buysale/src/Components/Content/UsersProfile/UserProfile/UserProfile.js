import React from "react";
import style from './UserProfile.module.css';
import noname from './../../../../../src/assets/images/noname.png';
import { NavLink } from 'react-router-dom';
import axios from "axios";
import { FollowUnfollow } from "../../../../DAL/API/api";

const UserProfile = (props) => {
    
    debugger;
    let clickFollowUser = () => {
        props.onFollowUser(props.id);
    };

    let clickUnfollowUser = () => {
        props.onUnfollowUser(props.id);
    };

    let changeStatusFollowing = (status, id) => {
        debugger;
        props.onChangeFollowingStatus(status, id);
        debugger;
    }
    
    var yourConfig = {
        headers: {
               Authorization: "Bearer " + props.token
            }
    };
    // render(){
    return(
        <div className={style.anketItem}>
            <div className={style.usersContent}>
                <div>
                    <div>
                        <NavLink to={"/profile/"+props.id}>
                            { props.avatar != null ? <img src={props.avatar} className={style.avatar}/> : <img src={noname} className={style.avatar}/>}
                        </NavLink>
                    </div>
                    {props.followed ?  <button disabled={props.FollowInProgress.some(id => id === props.id)} onClick={()=>{
                            console.log(props);
                            changeStatusFollowing(true, props.id);
                            console.log("Followed progress " + props.FollowInProgress);

                            FollowUnfollow(false, props.id, yourConfig).then(function(response){
                                if(response.status === 200){
                                    if(response.data.resultStatus === 0){
                                        alert("Success");
                                        debugger;
                                        clickUnfollowUser();
                                        changeStatusFollowing(false, props.id);
                                        console.log("Followed progress " + props.FollowInProgress);
                                        // console.log(this.props);
                                        // this.props.onUnfollowUser(this.props.id);
                                    }

                                    else{
                                        alert(response.data.err5orMessage);
                                        changeStatusFollowing(false, props.id);
                                    }
                                }
                            })
                            .catch((error)=>{
                                debugger;
                                alert("Error " + error.message);
                                changeStatusFollowing(false, props.id);
                            });
                            debugger;
                            // changeStatusFollowing(false);
                            //alert("Folowed progress " + props.statusFollowing);
                        }
                            
                            // this.clickUnfollowUser
                        }>Unfollow</button> : <button disabled={props.FollowInProgress.some(id => id === props.id)} onClick={()=>{
                            console.log(props);
                            changeStatusFollowing(true, props.id);
                            console.log("Followed progress " + props.FollowInProgress);
                            // alert(yourConfig.headers.Authorization);
                            FollowUnfollow(true, props.id, yourConfig).then(function(response){
                                if(response.status === 200){
                                    if(response.data.resultStatus === 0){
                                        alert("Success");
                                        debugger;
                                        clickFollowUser();
                                        changeStatusFollowing(false, props.id);
                                        console.log("Followed progress " + props.FollowInProgress);
                                        // console.log(this.props);
                                        // this.props.onFollowUser(this.props.id);
                                        
                                    }

                                    else{
                                        alert(response.data.err5orMessage);
                                        changeStatusFollowing(false, props.id);
                                    }
                                }
                            })
                            .catch((error)=>{
                                debugger;
                                alert("Error " + error.message);
                                changeStatusFollowing(false,props.id);
                            });
                            debugger;
                            // changeStatusFollowing(false);
                            //alert("Folowed progress " + props.statusFollowing);
                        }
                            
                            // this.clickFollowUser
                        }>Follow</button>}
                    
                </div>
                <div>
                    <div>
                        <p>{props.name}</p> 
                    </div>
                    <div>
                        <p>{props.status}</p> 
                    </div>
                </div>
                <div>
                    <div>
                        <p>{props.country}</p> 
                    </div>
                    <div>
                        <p>{props.city}</p> 
                    </div>
                </div>
            </div>
        </div>
        );
    // }
}

export default UserProfile;