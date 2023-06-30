import React from "react";
import UsersProfileAPIComponent from "./UsersProfileAPIComponent";
import { connect } from 'react-redux';
import { followUser, unfollowUser,  set_State, set_Data_Local_Server, setPageCount, setCurrentPage, clearUsersList, changeFetchingStatus, changeFollowingStatus } from "../../../BLL/Reduces/UsersReducer";


let mapStateToProps = (state) => {
    debugger;
    return {
        usersPage : state.usersPage,
        auth      : state.auth
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
        },
        onChangePage : (page) =>{
            dispatch(setCurrentPage(page));
        },
        onClearUsersList : () => {
            dispatch(clearUsersList());
        },
        onChangeFetchingStatus : (status) => {
            dispatch(changeFetchingStatus(status));
        },
        onChangeFollowingStatus : (status, id) => {
            dispatch(changeFollowingStatus(status, id));
        }

    };
}

const UsersProfileContainer = connect(mapStateToProps, mapDispatchToProps)(UsersProfileAPIComponent)

export default UsersProfileContainer;  