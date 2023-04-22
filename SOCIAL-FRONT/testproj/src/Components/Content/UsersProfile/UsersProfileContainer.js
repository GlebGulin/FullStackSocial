import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';
import { followUser, unfollowUser,  set_State} from "../../../BLL/Reduces/UsersReducer";


let mapStateToProps = (state) => {
    debugger;
    return {
        usersPage : state.usersPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollowUser : (id) => {
            dispatch(followUser(id));
        },
        onUnfollowUser : (id) => {
            dispatch(unfollowUser(id));
        },
        onSetState : (users) => {
            dispatch(set_State(users));
        }
    };
}

const UsersProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UsersProfile)

export default UsersProfileContainer; 