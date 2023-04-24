import style from './NewMessage.module.css';
import React from 'react';
import { addNewMessageActionCreator } from '../../../../BLL/State/store';
import { updateCurrentMessageCreator } from '../../../../BLL/State/store';

const NewMessage = (props) => {
    let newMessageElement = React.createRef();
    let onAddNewMesage = () => {
        debugger;
        newMessageElement.current.value = '';
        // props.dispatch(addNewMessageActionCreator());
        props.addNewMesage();
    }

    let onChangeCurrentMessage = () => {
        debugger;
        let messageCurrent = newMessageElement.current.value;
        // props.dispatch(updateCurrentMessageCreator(messageCurrent));
        props.changeCurrentMessage(messageCurrent);
    }

    return (
    <div>
        <textarea ref={newMessageElement} onChange={onChangeCurrentMessage}></textarea> <br></br>
        <button onClick={onAddNewMesage}>Add message</button>
    </div>)
}

export default NewMessage;