import style from './NewMessage.module.css';
import React from 'react';
import { addNewMessageActionCreator } from './../../../../BLL/State/State';
import { updateCurrentMessageCreator } from './../../../../BLL/State/State';

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    let addNewMesage = () => {
        debugger;
        newMessageElement.current.value = '';
        props.dispatch(addNewMessageActionCreator());
    }

    let changeCurrentMessage = () => {
        debugger;
        let messageCurrent = newMessageElement.current.value;
        props.dispatch(updateCurrentMessageCreator(messageCurrent));
    }

    return (
    <div>
        <textarea ref={newMessageElement} onChange={changeCurrentMessage}></textarea> <br></br>
        <button onClick={addNewMesage}>Add message</button>
    </div>)
}

export default NewMessage;