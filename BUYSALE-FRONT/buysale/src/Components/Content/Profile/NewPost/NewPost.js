import React from 'react';
import classes from './NewPost.module.css';

const NewPost = (props) => {
    debugger;
    let newPostElement = React.createRef();
    console.log(newPostElement);
    
    let onAddPost = () => {
        debugger;
        newPostElement.current.value = '';
        // let action = {
        //     type : "ADD-NEW-POST"
        // }
        // props.addNewPost();
        // props.dispatch(addNewPostActionCreator());
        // alert(newPostText);
        props.addPost();
    }
    let onChangePostText = () => {
        debugger;
        let newPostText = newPostElement.current.value;
        // let action = {
        //    message : newPostText,
        //    type : "UPDATE-CURRENT-POST"
        // };
        // console.log(newPostElement);

        // props.changeStatePost(newPostText);
        // props.dispatch(updateCurrentPostCreator(newPostText));
        // alert("Was changed");
        props.changePostText(newPostText);
    }

    return (
       <div>
            <textarea ref = { newPostElement } onChange={onChangePostText} value={props.currentPost}></textarea><br />
            <button onClick={onAddPost}>Post</button>
        </div>
    );
}
export default NewPost;