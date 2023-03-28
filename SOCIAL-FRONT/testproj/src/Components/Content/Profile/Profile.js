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
let fullname = {
    firstName : 'Henk',
    lastName : 'Duglas'
}

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2FqTQbw1nYLs0-rj4_c7vLOhtemYtQtm5m4v-DBTmQ&s' width='100px'/>
            </div>
            <div>
                <p>{fullname.firstName} {fullname.lastName}</p>
            </div>
        </div>
    )
}

export default Profile;