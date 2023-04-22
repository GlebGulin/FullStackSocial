import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import style from './UserProfile/UserProfile.module.css';

const UsersProfile = (props) =>{
    debugger;
    let usersItems = props.usersPage.users.map(el =>
        (<UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
            onFollowUser={props.onFollowUser} 
            onUnfollowUser={props.onUnfollowUser}/>));
        return(
            <div>
                {usersItems}
            </div>
        )
}

export default UsersProfile; 