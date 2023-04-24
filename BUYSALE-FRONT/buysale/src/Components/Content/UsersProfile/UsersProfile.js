import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import style from './UserProfile/UserProfile.module.css';
import noname from './../../../../src/assets/images/noname.png'
import axios from "axios";

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

class UsersProfile extends React.Component{
    constructor(props){
        super(props)
        // this.porps = props;
        this.showUsers();
    }

    clickFollowUser = (id) => {
        this.props.onFollowUser(id);
    };

    clickUnfollowUser = (id) => {
        this.props.onUnfollowUser(id);
    }
    
    showUsers = () => {
        debugger;
        console.log("Quantity of users: " + this.props.usersPage.users.length);
        if (this.props.usersPage.users.length === 0){
            debugger;
            console.log(this.props);
                try{
                    axios.get(`https://localhost:44367/users`)
                    // axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
                    .then((response) => {
                        console.log(response.status);
                        if(response.status === 200){
                            console.log(response.data);
                            this.props.onSetStateFromLocalServer(response.data.users);
                        }
                        else{
                            alert("Error");
                        }
                        
    
                    }).catch(()=>{
                        this.props.onSetState(usersNew)
                    });
                }
                catch{
                    console.log(usersNew);
                    this.props.onSetState(usersNew);
                }
            }
            
            
            // fetch('https://localhost:44367/users')
            //     .then(response => response.json())
            //     .then(data => { console.log(data) });
        // }, []);
        
        // axios.get("https://social-network.samuraijs.com/api/1.0/users");
        //
    }
    debugger;
    
    //Why doesn't compile with this
    //Moved to common render of class
    usersItems = this.props.usersPage.users.map(el =>
        (<UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
            onFollowUser={this.props.onFollowUser} 
            onUnfollowUser={this.props.onUnfollowUser}/>));
    debugger;
    render(){ 
        // return <h1>Text</h1>
        return (<div>
                    {/* <button onClick={this.showUsers}>Show Users</button> */}
                    {/* {this.usersItems} */}
                    {/* <div>
                        {this.props.usersPage.users.map(el =>
                            (<div className={style.anketItem}>
                                <div className={style.usersContent}>
                                    <div>
                                        <div>
                                            { el.avat != null ? <img src={el.avat} className={style.avatar}/> : <img src={noname} className={style.avatar}/>}
                                            
                                        </div>
                                        {el.followed ?  <button onClick={() => {this.clickUnfollowUser(el.id)}}>Unfollow</button> : <button onClick={() => {this.clickFollowUser(el.id)}}>Follow</button>}
                                        
                                    </div>
                                    <div>
                                        <div>
                                            <p>{el.name}</p> 
                                        </div>
                                        <div>
                                            <p>{el.status}</p> 
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>{el.country}</p> 
                                        </div>
                                        <div>
                                            <p>{el.city}</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            // <UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
                            //     onFollowUser={this.props.onFollowUser} 
                            //     onUnfollowUser={this.props.onUnfollowUser}/>)
                            ))}
                    </div> */}
                    {
                        this.props.usersPage.users.map(el =>
                            (<UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
                                onFollowUser={this.props.onFollowUser} 
                                onUnfollowUser={this.props.onUnfollowUser}/>))
                    }
            </div>)
    }
}

export default UsersProfile; 