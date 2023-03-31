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
    return (
        <div>
            <div>
                <img src={props.profileData.preview} width='100px'/>
            </div>
            <div>
                <p>{props.profileData.firstName} {props.profileData.lastName}</p>
            </div>
            <div>
                <p>{props.profileData.age}</p>
            </div>
        </div>
    )
}

export default Profile;