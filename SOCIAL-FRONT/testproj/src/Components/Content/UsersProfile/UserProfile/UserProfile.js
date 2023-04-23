import React from "react";
import style from './UserProfile.module.css';
import noname from './../../../../../src/assets/images/noname.png'

const UserProfile = (props) => {
    
    debugger;
    let clickFollowUser = () => {
        props.onFollowUser(props.id);
    };

    let clickUnfollowUser = () => {
        props.onUnfollowUser(props.id);
    }
    return(
        <div className={style.anketItem}>
        <div className={style.usersContent}>
            <div>
                <div>
                    { props.avatar != null ? <img src={props.avatar} className={style.avatar}/> : <img src={noname} className={style.avatar}/>}
                    
                </div>
                {props.followed ?  <button onClick={clickUnfollowUser}>Unfollow</button> : <button onClick={clickFollowUser}>Follow</button>}
                
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
}

export default UserProfile;