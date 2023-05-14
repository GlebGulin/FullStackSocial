// import UserPosts from './UserPosts/UserPosts';
// import NewPost from './NewPost/NewPost';
import Profile from './Profile';

import st from './ProfileContainer.module.css';
// import NewPostContainer from './NewPost/NewPostContainer';
// import MyCustomContext from '../../../BLL/CustomContext/MyCustomContext';
import { Provider, connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addNewPostActionCreator } from './../../../BLL/Reduces/ProfileReducer';
import { updateCurrentPostCreator } from './../../../BLL/Reduces/ProfileReducer';
import { setProfileInfo } from './../../../BLL/Reduces/ProfileReducer';
import ProfileAPIComponent from './ProfileAPIComponents';

// let posts = [
//     {
//         id : 1,
//         text : 'Message number one',
//         author: 'Author',
//         date : '05-05-1988'
//     },
//     {
//         id : 2,
//         text : 'Message number two',
//         author: 'Author',
//         date : '05-05-1990'
//     }
// ];

// let postsElement = posts.map(post => 
//     (<UserPosts id={post.id} text={post.text} author={post.author} date={post.date}/>))

// const MainContent = (props) => {
//     // let postsElement = props.posts.map(post => 
//     //     (<UserPosts id={post.id} text={post.text} author={post.author} date={post.date}/>))
    
//     debugger;

//     // using Usual props
//     // return(
//     //     <MyCustomContext.Consumer>
//     //         <div>
//     //             <Profile profileData={props.profileData}/>
//     //             <NewPostContainer 
//     //             // addNewPost={props.addNewPost}
//     //             // changeStatePost = {props.changeStatePost}
//     //             dispatch = { props.dispatch }
//     //             currentPost = {props.currentPost}
//     //             store = {props.store}
//     //             />
//     //             {/* {postsElement} */}
//     //         </div>
//     //     </MyCustomContext.Consumer>
//     // );

//     return(
//         <MyCustomContext.Consumer>{
//         // <Provider>{
//                 (store) => {
//                     let state = store.getState().profilePage;
//                     let postsElement = state.posts.map(post => 
//                         (<UserPosts id={post.id} text={post.text} author={post.author} date={post.date}/>))
//                     debugger;
//                 return (
//                     <div>
//                         <Profile profileData={state}/>
//                         <NewPostContainer 
//                             dispatch = { store.dispatch }
//                             currentPost = {state.currentPost}
//                             store = {store}
//                         /> 
//                         {postsElement}
//                     </div>
//                 )
//             }
//         }
//         </MyCustomContext.Consumer>
        
//     );
// }


let mapStateToProps = (state) => {
    return {
        profilePage : state.profilePage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changePostText : (text) => {
            debugger;
            dispatch(updateCurrentPostCreator(text));
        },

        addPost : () => {
            debugger;
            dispatch(addNewPostActionCreator());
        },
        setprofile : (profile) => {
            dispatch(setProfileInfo(profile));
        }
    };
}

// const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);
// withRouter(ProfileAPIComponent);
export function withRouter(ProfileAPIComponent){
    return(props)=>{
       const match  = {params: useParams()};
       return <ProfileAPIComponent {...props}  match = {match}/>
   }
 }
let withR = withRouter(ProfileAPIComponent);
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(withR);

export default ProfileContainer;