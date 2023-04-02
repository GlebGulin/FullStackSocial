import React from 'react';
import classes from './NewPost.module.css';



const NewPost = (props) => {
    debugger;
    let newPostElement = React.createRef();
    console.log(newPostElement);
    
    let addPost = () => {
        debugger;
        let newPostText = newPostElement.current.value;
        console.log(newPostElement);
        props.addNewPost(newPostText);
        // alert(newPostText);
    }
    let changePostText = () => {
        alert("Was changed");
    }

    return (
       <div>
            <textarea ref = { newPostElement } onChange={changePostText}></textarea><br />
            <button onClick={addPost}>Post</button>
        </div>
    );
}
export default NewPost;