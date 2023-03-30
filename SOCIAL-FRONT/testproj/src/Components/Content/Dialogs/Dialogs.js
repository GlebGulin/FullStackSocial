import { NavLink } from 'react-router-dom';
import st from './Dialogs.module.css';
import MessageItem from './MessagesItems/MessageItem';
import DialogItem from './DialogItems/DialogItem';



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

const Dialogs = () => {
    let dialogData = [
        {
            id : 1,
            name : 'First Name'
        },
        {
            id : 2,
            name : 'Second Name'
        },
        {
            id : 3,
            name : 'Third Name'
        },
    ];

    let dialogElements = dialogData.map(el => 
        (<DialogItem id={el.id} 
                     name={el.name}/>));

    let messageData = [
        {
            id : 1,
            message : 'First message',
            date: '02-02-1982'
        },
        {
            id : 2,
            message : 'Second message',
            date : '03-03-1995'
        },
        {
            id : 3,
            message : 'Third message',
            date : '12-12-2005'
        },
    ];

    let messageElements = messageData.map(mess => 
        (<MessageItem id={mess.id} 
                    message={mess.message} date={mess.date}/>))
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
            </div>
        </div>
    );
}

export default Dialogs;