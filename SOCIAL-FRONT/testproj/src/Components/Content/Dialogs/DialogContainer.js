import React from 'react';
import { addNewMessageActionCreator } from '../../../BLL/State/store';
import { updateCurrentMessageCreator } from '../../../BLL/State/store';
import Dialog from './Dialog';
import { connect } from 'react-redux';

const DialogContainer = (props) => {
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
        <Dialog 
            changeCurrentMessage={changeCurrentMessage} 
            addNewMesage={addNewMesage} 
            dialogPage={props.store.getState().dialogPage }/>
    </div>)
}

export default DialogContainer;