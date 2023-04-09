import style from './NewMessage.module.css';
import React from 'react';
import { addNewMessageActionCreator } from '../../../../BLL/State/store';
import { updateCurrentMessageCreator } from '../../../../BLL/State/store';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {
    // let newMessageElement = React.createRef();
    let addNewMesage = () => {
        debugger;
        // newMessageElement.current.value = '';
        props.store.dispatch(addNewMessageActionCreator());
    }

    let changeCurrentMessage = (text) => {
        debugger;
        // let messageCurrent = newMessageElement.current.value;
        props.store.dispatch(updateCurrentMessageCreator(text));
    }

    return (
    <div>
        {/* <textarea ref={newMessageElement} onChange={changeCurrentMessage}></textarea> <br></br>
        <button onClick={addNewMesage}>Add message</button> */}
        <NewMessage changeCurrentMessage={changeCurrentMessage} addNewMesage={addNewMesage}/>
    </div>)
}

export default NewMessageContainer;