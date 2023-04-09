import React from 'react';
import classes from './NewPost.module.css';
import { addNewPostActionCreator } from '../../../../BLL/State/store';
import { updateCurrentPostCreator } from '../../../../BLL/State/store';
import NewPost from './NewPost';

const NewPostContainer = (props) => {
    debugger;
    let newPostElement = React.createRef();
    console.log(newPostElement);
    
    let addPost = () => {
        debugger;
        // newPostElement.current.value = '';
        // let action = {
        //     type : "ADD-NEW-POST"
        // }
        // props.addNewPost();
        props.dispatch(addNewPostActionCreator());
        // alert(newPostText);
    }
    let changePostText = (text) => {
        debugger;
        // let newPostText = newPostElement.current.value;
        props.dispatch(updateCurrentPostCreator(text));
        // alert("Was changed");
    }

    return (
       <div>
            <NewPost changePostText={changePostText} addPost={addPost} />
        </div>
    );
}

export default NewPostContainer;