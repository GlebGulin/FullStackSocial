import React from "react";
import UsersProfile from "./UsersProfile";
import { connect } from 'react-redux';
import { followUser, unfollowUser,  set_State, set_Data_Local_Server, setPageCount} from "../../../BLL/Reduces/UsersReducer";


let mapStateToProps = (state) => {
    debugger;
    return {
        usersPage : state.usersPage
        //pageSize  : state.pageSize
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
        },
        onSetStateFromLocalServer : (users) => {
            dispatch(set_Data_Local_Server(users));
        },
        onSetPageCount : (count) =>{
            dispatch(setPageCount(count));
        }
    };
}

const UsersProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UsersProfile)

export default UsersProfileContainer; 