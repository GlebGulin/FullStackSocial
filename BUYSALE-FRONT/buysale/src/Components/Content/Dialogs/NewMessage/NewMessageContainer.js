import style from './NewMessage.module.css';
import React from 'react';
import { addNewMessageActionCreator } from '../../../../BLL/Reduces/DialogReducer';
import { updateCurrentMessageCreator } from '../../../../BLL/Reduces/DialogReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

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
        <NewMessage 
            changeCurrentMessage={changeCurrentMessage} 
            addNewMesage={addNewMesage} 
            />
    </div>)
}

let mapStateToProps = () => {
    return{

    };
};

let f2 = () => {
    return {

    }
}

const ProviderNewMessageContainer = connect()(NewMessage);

export default NewMessageContainer;