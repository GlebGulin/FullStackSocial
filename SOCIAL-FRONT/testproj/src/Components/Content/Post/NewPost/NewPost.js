import React from 'react';
import classes from './NewPost.module.css';
import { addNewPostActionCreator } from './../../../../BLL/State/State';
import { updateCurrentPostCreator } from './../../../../BLL/State/State';

const NewPost = (props) => {
    debugger;
    let newPostElement = React.createRef();
    console.log(newPostElement);
    
    let addPost = () => {
        debugger;
        newPostElement.current.value = '';
        // let action = {
        //     type : "ADD-NEW-POST"
        // }
        // props.addNewPost();
        props.dispatch(addNewPostActionCreator());
        // alert(newPostText);
    }
    let changePostText = () => {
        debugger;
        let newPostText = newPostElement.current.value;
        // let action = {
        //    message : newPostText,
        //    type : "UPDATE-CURRENT-POST"
        // };
        // console.log(newPostElement);

        // props.changeStatePost(newPostText);
        props.dispatch(updateCurrentPostCreator(newPostText));
        // alert("Was changed");
    }

    return (
       <div>
            <textarea ref = { newPostElement } onChange={changePostText} value={props.currentPost}></textarea><br />
            <button onClick={addPost}>Post</button>
        </div>
    );
}
export default NewPost;