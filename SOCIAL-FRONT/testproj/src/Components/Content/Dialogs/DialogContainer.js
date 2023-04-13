import React from 'react';
import { addNewMessageActionCreator } from '../../../BLL/State/store';
import { updateCurrentMessageCreator } from '../../../BLL/State/store';
import Dialog from './Dialog';
import { Provider, connect } from 'react-redux';
import MyCustomContext from './../../../BLL/CustomContext/MyCustomContext';

// const DialogContainer = () => {
//     // let addNewMesage = () => {
//     //     debugger;
//     //     // newMessageElement.current.value = '';
//     //     props.store.dispatch(addNewMessageActionCreator());
//     // }

//     // let changeCurrentMessage = (text) => {
//     //     debugger;
//     //     // let messageCurrent = newMessageElement.current.value;
//     //     props.store.dispatch(updateCurrentMessageCreator(text));
//     // }

//     return (
//         <MyCustomContext.Consumer>
//         {/* <Provider> */}
//             {
//                 (store) => {
//                     let stateDialog = store.getState().dialogPage;
//                     debugger;

//                     let addNewMesage = () => {
//                         debugger;
//                         // newMessageElement.current.value = '';
//                         store.dispatch(addNewMessageActionCreator());
//                     }

//                     let changeCurrentMessage = (text) => {
//                         debugger;
//                         // let messageCurrent = newMessageElement.current.value;
//                         store.dispatch(updateCurrentMessageCreator(text));
//                     }

//                     return(
//                     <div>
//                         {/* <textarea ref={newMessageElement} onChange={changeCurrentMessage}></textarea> <br></br>
//                         <button onClick={addNewMesage}>Add message</button> */}
//                         <Dialog 
//                             changeCurrentMessage={changeCurrentMessage} 
//                             addNewMesage={addNewMesage} 
//                             dialogPage={ stateDialog }/>
//                     </div>)
//                 }
//             }
//         </MyCustomContext.Consumer>
//     )
// }

// Using library react-redux

let mapStateToProps = (state) => {
    return {
        dialogPage : state.dialogPage
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeCurrentMessage : (text) => {
            debugger;
            // let messageCurrent = newMessageElement.current.value;
            dispatch(updateCurrentMessageCreator(text));
        },
        addNewMesage : () => {
            debugger;
            // newMessageElement.current.value = '';
            dispatch(addNewMessageActionCreator());

        }
    };
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

// export default DialogContainer;
export default DialogContainer;