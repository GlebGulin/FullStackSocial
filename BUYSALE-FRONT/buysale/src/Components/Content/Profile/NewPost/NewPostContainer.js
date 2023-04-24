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
        props.dispatch(addNewPostActionCreator());
    }
    let changePostText = (text) => {
        debugger;
        props.dispatch(updateCurrentPostCreator(text));
    }

    return (
       <div>
            <NewPost changePostText={changePostText} addPost={addPost} />
        </div>
    );
}

export default NewPostContainer;