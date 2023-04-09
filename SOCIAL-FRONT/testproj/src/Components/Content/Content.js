import UserPosts from './Post/UserPosts/UserPosts';
import NewPost from './Post/NewPost/NewPost';
import Profile from './Profile/Profile';

import st from './Content.module.css';
import NewPostContainer from './Post/NewPost/NewPostContainer';

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

const MainContent = (props) => {
    let postsElement = props.posts.map(post => 
        (<UserPosts id={post.id} text={post.text} author={post.author} date={post.date}/>))
    
    debugger;
    return(
        <div>
            <Profile profileData={props.profileData}/>
            <NewPostContainer 
            // addNewPost={props.addNewPost}
            // changeStatePost = {props.changeStatePost}
            dispatch = { props.dispatch }
            currentPost = {props.currentPost}
            store = {props.store}
            />
            {postsElement}
        </div>
    );
}

export default MainContent;