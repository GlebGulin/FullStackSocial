const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST';
const ADD_NEW_POST = 'ADD_NEW_POST';

//Start initialize profileState after including Redux
let initialState = {
    profileData : {
        id : 'gfghgf-gfhgfhgfh-hfghgfhgf-ghgfhghjghjgh',
        firstName : "John",
        lastName : "Malkovich",
        preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2FqTQbw1nYLs0-rj4_c7vLOhtemYtQtm5m4v-DBTmQ&s',
        age : 34
    },
    posts : [
        {
            id : 0,
            text : 'Message number one',
            author: 'Author',
            date : '05-05-1988'
        },
        {
            id : 1,
            text : 'Message number two',
            author: 'Author555',
            date : '05-05-1990'
        }
    ],
    currentPost : ""
}

const ProfileReducer = (state = initialState, action) => {
    debugger;
    switch(action.type){
        
        case UPDATE_CURRENT_POST:
            debugger;
            console.log(action.message);
            state.currentPost = action.message;
            return state;

        case ADD_NEW_POST:
            let count = state.posts.length;
            let id = count + 1 ;
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
    
            today = mm + '-' + dd + '-' + yyyy;
            console.log(today);
            let newPost = {
                id : id,
                text : state.currentPost,
                author : "Me",
                date : today
            }
            state.posts.push(newPost);
            state.currentPost = "";
            return state;

        default:
            return state;
    }
}

export default ProfileReducer;