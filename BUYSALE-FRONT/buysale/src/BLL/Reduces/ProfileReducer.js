const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST';
const ADD_NEW_POST = 'ADD_NEW_POST';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

//Start initialize profileState after including Redux
let initialState = {
    profileData : {
        id : 'gfghgf-gfhgfhgfh-hfghgfhgf-ghgfhghjghjgh',
        firstName : "Demo",
        lastName : "Demo",
        preview : 'https://daveywankenobie.files.wordpress.com/2016/09/img_8562.jpg',
        age : 34,
        city : "Test",
        country : "Country"
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
    let stateCopy = {};
    switch(action.type){
        
        case UPDATE_CURRENT_POST:{
            debugger;
            stateCopy = {
                ...state
            };
            console.log(action.message);
            // let copyState = {...state};
            stateCopy.currentPost = action.message;
            return stateCopy;
        }

        case ADD_NEW_POST:
            {
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
            stateCopy = {
                ...state,
                posts : [...state.posts, {id:newPost.id, text:newPost.text, author: newPost.author, date : newPost.date}]
            };
            // let copyState = {
            //     ...state,

            // };
            // copyState.posts = [...state.posts];
            // state.posts.push(newPost);
            // stateCopy.posts.push(newPost);
            //state.currentPost = "";
            stateCopy.currentPost = "";
            return stateCopy;
        }

        case SET_PROFILE_INFO:{
            stateCopy = {...state};
            stateCopy.profileData = {...state.profileData};
            stateCopy.profileData.age = action.profile.age;
            stateCopy.profileData.firstName = action.profile.firstName;
            stateCopy.profileData.lastName = action.profile.lastName;
            stateCopy.profileData.preview = action.profile.avatarImg;
            stateCopy.profileData.city = action.profile.city;
            stateCopy.profileData.country = action.profile.country;
            stateCopy.profileData.userStatus = action.profile.userStatus;
            console.log("Updated state of profile");
            console.log(stateCopy.profileData);
            return stateCopy;
        }

        default:
            return state;
    }
}

export const addNewPostActionCreator = () => {
    return {
        type : ADD_NEW_POST
    }
}

export const updateCurrentPostCreator = (message) => {
    return {
        type : UPDATE_CURRENT_POST,
        message : message
    }
}

export const setProfileInfo = (profile) => {
    return {
        type : SET_PROFILE_INFO,
        profile : profile
    }
}

export default ProfileReducer;