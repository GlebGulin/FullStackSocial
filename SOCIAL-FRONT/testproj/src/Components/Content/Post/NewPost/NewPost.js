import React from 'react';
import classes from './NewPost.module.css';



const NewPost = (props) => {
    debugger;
    let newPostElement = React.createRef();
    console.log(newPostElement);
    
    let addPost = () => {
        debugger;
        newPostElement.current.value = '';
        props.addNewPost();
        // alert(newPostText);
    }
    let changePostText = () => {
        debugger;
        let newPostText = newPostElement.current.value;
        // console.log(newPostElement);
        props.changeStatePost(newPostText);
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