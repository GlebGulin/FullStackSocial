import React from 'react';
import axios from 'axios';

let data = {};

// componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//     })
// }

const Profile = (props) => {
    debugger;
    console.log(props);
    return (
        <div>
            <div>
                <img src={props.profileData.profileData.preview} width='100px'/>
            </div>
            <div>
                <p>{props.profileData.profileData.firstName} {props.profileData.profileData.lastName}</p>
            </div>
            <div>
                <p>{props.profileData.profileData.age}</p>
            </div>
        </div>
    )
}

export default Profile;