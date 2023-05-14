import React from "react";
import style from './UserProfile.module.css';
import noname from './../../../../../src/assets/images/noname.png';
import { NavLink } from 'react-router-dom';

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
                {this.props.followed ?  <button onClick={this.clickUnfollowUser}>Unfollow</button> : <button onClick={this.clickFollowUser}>Follow</button>}
                
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