import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import style from './UserProfile/UserProfile.module.css';
import preloader from './../../../assets/images/giphy.gif'
import axios from "axios";
import UsersProfile from "./UsersProfile";
import Preloader from "../../Common/Preloader";
import { useNavigate } from "react-router-dom";
import { GetUsers } from "../../../DAL/API/api";

let usersNew = [
    {
        id : "456345325665464",
        country : "Ukraine",
        city : "Kiev",
        name : "Tatiana Ugolkova",
        followed : true,
        avat : "https://www.forestryengland.uk/sites/default/files/styles/forest_slide_wide_wide/public/media/1050469.012.jpg?h=f79e0371&itok=yr4t-b0o",
        status : "I am ready"
    },
    {
        id : "45645646554544654654654",
        country : "Deutchland",
        city : "Berlin",
        name : "Natasha Sex",
        followed : true,
        avat : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOgqZZCIpYdYeFO2205Q64v3YQzjBYUDsq0-M3wjDBDtH3sL3efmWXWX0vOguCIG7DtVs&usqp=CAU",
        status : "Call me"
    },
    {
        id : "45645646554544654654543534654",
        country : "USA",
        city : "New York",
        name : "Savannah Watson",
        followed : true,
        avat : "https://ca1-worcestershire.dccdn.net/Entry-Main-Image/_896x521_crop_center-center_90_none/9591/Forestry-Commission-185-e1629292886276_2022-09-22-092501_nsad.webp?v=1665475342",
        status : "Where are you"
    },
    {
        id : "45645646554544654654543534544654",
        country : "Moldova",
        city : "Kisineu",
        name : "Savannah Watson",
        followed : false,
        avat : null,
        status : "Where are you"
    }
]



let pageTestCount = Math.ceil(usersNew / 10);
// const navigate = useNavigate();

class UsersProfileAPIComponent extends React.Component{
    
    clickFollowUser = (id) => {
        this.props.onFollowUser(id);
    };

    clickUnfollowUser = (id) => {
        this.props.onUnfollowUser(id);
    };

    clickChangePage = (number) => {
        var yourConfig = {
            headers: {
               Authorization: "Bearer " + this.props.auth.token
            }
        }
        alert(this.props.auth.token);
        console.log("Test login");
        console.log(this.props.auth.token);
        

        this.props.onChangeFetchingStatus(true);
        this.props.onChangePage(number);
        // axios.get(`https://localhost:44367/users/other-users?limit=${this.props.usersPage.pageSize}&page=${number}`, yourConfig)
            GetUsers(this.props.usersPage.pageSize, number, yourConfig).then((response) => {
                        this.props.onChangeFetchingStatus(false);
                        console.log(response.status);
                        if(response.status === 200){
                            console.log(response.data);
                            this.props.onClearUsersList();
                            this.props.onSetStateFromLocalServer(response.data.users);
                            this.props.onSetPageCount(response.data.pageCount);
                        }
                        else{
                            alert("Error");
                        }});
        
    };

    componentDidMount(){
        this.showUsers();
    };

    showUsers = () => {
        alert(this.props.auth.token);
        // alert("showUsers function status: " + true);
        if(this.props.auth.token === null || this.props.auth.token === ""){
            // navigate('/login');
            //TODO redirect to login
            alert("Please, login");
        }
        else{
        this.props.onChangeFetchingStatus(true);
        debugger;
        console.log("Quantity of users: " + this.props.usersPage.users.length);
        if (this.props.usersPage.users.length === 0){
            debugger;
            console.log(this.props);
                try{
                    alert(this.props.auth.token);
                    console.log("Test login");
                    console.log(this.props.auth.token);
                    var yourConfig = {
                        headers: {
                           Authorization: "Bearer " + this.props.auth.token
                        }
                    }
                    alert(this.props.auth.token);
                    GetUsers(this.props.usersPage.pageSize, this.props.usersPage.currentPage, yourConfig).then((response) => {
                        debugger;
                        this.props.onChangeFetchingStatus(false);
                        console.log(response.status);
                        if(response.status === 200){
                            debugger;
                            console.log(response.data);
                            this.props.onSetStateFromLocalServer(response.data.users);
                            this.props.onSetPageCount(response.data.pageCount);
                        }
                        else{
                            alert("Error");
                        }
                        
    
                    }).catch((error)=>{
                        alert(error.message);
                        this.props.onChangeFetchingStatus(false);
                        this.props.onSetState(usersNew);
                        this.props.onSetPageCount(pageTestCount);
                    });
                }
                catch(error){

                    alert(error.message);
                    console.log(usersNew);
                    this.props.onSetState(usersNew);
                }
            }
            else{
                this.props.onChangeFetchingStatus(false);
            }
        }
    }


    debugger;
    
    //Why doesn't compile with this
    render(){ 
        // return <h1>Text</h1>
        // alert(this.props.usersPage.pageCount);
        console.log("Props in API Compoment: ");
        
        console.log(this.props);
        return (
        <div>
            {this.props.usersPage.isFetching ? <Preloader /> : null}
            <UsersProfile clickFollowUser={this.clickFollowUser}
                                  clickUnfollowUser={this.clickUnfollowUser}
                                  clickChangePage={this.clickChangePage}
                                  users = {this.props.usersPage.users}
                                  currentPage={this.props.usersPage.currentPage}
                                  token={this.props.auth.token}
                                  onChangeFollowingStatus = {this.props.onChangeFollowingStatus}
                                  FollowInProgress = {this.props.usersPage.FollowInProgress}
                                  pageCount={this.props.usersPage.pageCount}/>
            </div>)
    }
}

export default UsersProfileAPIComponent; 