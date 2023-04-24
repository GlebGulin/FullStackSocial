import React from 'react';
import axios from 'axios';
import ProfilePart from './ProfilePart/ProfilePart';
import NewPostContainer from './NewPost/NewPost';
import UserPosts from './UserPosts/UserPosts';


const Profile = (props) => {
    debugger;
    console.log(props);
    return (
        <div>
            <ProfilePart state={ props.profilePage.profileData }/>
            <NewPostContainer state={ props.profilePage } 
                addPost={props.addPost} 
                changePostText={props.changePostText}
            />
            <UserPosts state= {props.profilePage.posts} />
        </div>
    )
}

export default Profile;