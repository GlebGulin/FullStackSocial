import { NavLink } from 'react-router-dom';
import st from './Dialogs.module.css';
import MessageItem from './MessagesItems/MessageItem';
import DialogItem from './DialogItems/DialogItem';
import NewMessage from './NewMessage/NewMessage';
import NewMessageContainer from './NewMessage/NewMessageContainer';
import React from 'react';



// const DailogItem = (props) => {
//     let urlDialog = '/messages/' + props.id;
//     let id = "resdondent-"+props.id;
//     return (
//         <div>
//             <NavLink id={id} to={urlDialog}>{props.name}</NavLink>
//         </div>
//     )
// } 

// const MessageItem = (props) => {
//     let id="message-" + props.id;
//     return(<div>
//         <p id={id}>{props.message}</p>
//     </div>)
// }

const Dialog = (props) => {
    debugger;
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


    let dialogElements = props.dialogPage.dialogItems.map(el => 
        (<DialogItem id={el.id} 
                     name={el.name}/>));

    let messageElements = props.dialogPage.messageData.map(mess => 
        (<MessageItem id={mess.id} 
                    message={mess.message} date={mess.date}/>))
    debugger;
    return (
        <div className={st.dialogsContent}>
            <div className={st.resident}>
                {dialogElements}

           
                {/* <DailogItem id='1' name='First Name'/>
                <DailogItem id='2' name='Second Name'/>
                <DailogItem id='3' name='Third Name'/>
                <DailogItem id='4' name='Fourth Name'/> */}
                {/* <div className={st.dialogItem + ' ' + st.active}>
                    <NavLink to='/messages/2'>2</NavLink>
                </div>
                <div className={st.dialogItem + ' ' + st.active}>
                    <NavLink to='/messages/3'>3</NavLink>
                </div>
                <div className={st.dialogItem + ' ' + st.active}>
                    <NavLink to='/messages/4'>4</NavLink>
                </div> */}
            </div>
            <div className={st.Dialogs}>
                {messageElements}
                {/* <MessageItem id='1' message='Hi' />
                <MessageItem id='2' message='Hi 1' />
                <MessageItem id='3' message='Hi 2' /> */}
                {/* < NewMessage dispatch={props.dispatch}/> */}
                {/* < NewMessageContainer dispatch={props.dispatch} store={props.store}/> */}
                <div>
                    <textarea ref={newMessageElement} onChange={onChangeCurrentMessage}></textarea> <br></br>
                    <button onClick={onAddNewMesage}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialog;