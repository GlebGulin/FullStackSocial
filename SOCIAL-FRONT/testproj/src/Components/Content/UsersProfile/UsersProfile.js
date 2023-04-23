import React from "react";
import UserProfile from "./UserProfile/UserProfile";
import style from './UserProfile/UserProfile.module.css';
import axios from "axios";

let usersNew = [
    {
        id : "456345325665464",
        country : "Ukraine",
        city : "Kiev",
        name : "Tatiana Ugolkova",
        followed : true,
        avat : "https://i.ebayimg.com/images/g/rZoAAOSwbxxhwKJv/s-l500.jpg",
        status : "I am ready"
    },
    {
        id : "45645646554544654654654",
        country : "Deutchland",
        city : "Berlin",
        name : "Natasha Sex",
        followed : true,
        avat : "https://images.nubiles-porn.com/models/natasha_nice/natasha_nice640.jpg",
        status : "Call me"
    },
    {
        id : "45645646554544654654543534654",
        country : "USA",
        city : "New York",
        name : "Savannah Watson",
        followed : true,
        avat : "https://i.pinimg.com/1200x/a3/51/b7/a351b79ed09296e261458e037be28058.jpg",
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



const UsersProfile = (props) =>{

    
        // React.useEffect(()=>{
            let showUsers = () => {
                if (props.usersPage.users.length === 0){
                    debugger;
                try{
                    axios.get(`https://localhost:44367/users`)
                    .then((response) => {
                        console.log(response.status);
                        if(response.status === 200){
                            
                            props.onSetStateFromLocalServer(response.data.users);
                        }
                        else{
                            alert("Error");
                        }
                        
    
                    }).catch(()=>{
                        props.onSetState(usersNew)
                    });
                }
                catch{
                    props.onSetState(usersNew);
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
    let usersItems = props.usersPage.users.map(el =>
        (<UserProfile key={el.id} id={el.id} avatar={el.avat} name={el.name} status={el.status} country={el.country} city={el.city} followed={el.followed}
            onFollowUser={props.onFollowUser} 
            onUnfollowUser={props.onUnfollowUser}/>));
        return(

            <div>
                <button onClick={showUsers}>Show Users</button>
                {usersItems}
            </div>
        )
}

export default UsersProfile; 