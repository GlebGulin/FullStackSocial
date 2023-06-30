import React from "react";
import st from './UserProfile/UserProfile.module.css';
import UserProfile from "./UserProfile/UserProfile";

const UsersProfile = (props) => {
    console.log(props);
    let arrPaginItem = [];
        for (let i = 0; i < props.pageCount; i++){
            arrPaginItem.push(i+1);
        }
        console.log(arrPaginItem);
    return(
        <div>
            <div className={st.paginationItems}>
                {arrPaginItem.map(el => 
                    (<span key={el} onClick={()=>{props.clickChangePage(el)}} className={(el==props.currentPage) ? st.activePagin : st.unactivePagin}>{el}{console.log(el)}</span>))}
            </div>
            <div>
                    {
                        props.users.map(el =>
                            (<UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
                                onFollowUser={props.clickFollowUser} 
                                token={props.token}
                                FollowInProgress = {props.FollowInProgress}
                                onChangeFollowingStatus = {props.onChangeFollowingStatus}
                                onUnfollowUser={props.clickUnfollowUser}/>))
                    }
            </div>
        </div>
    );
}

export default UsersProfile;