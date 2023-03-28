import { NavLink } from 'react-router-dom';
import st from './Dialogs.module.css';



const DailogItem = (props) => {
    let urlDialog = '/messages/' + props.id;
    return (
        <div>
            <NavLink to={urlDialog}>{props.name}</NavLink>
        </div>
    )
} 

const MessageItem = (props) => {
    return(<div>
        <p>{props.message}</p>
    </div>)
}

const Dialogs = () => {
    return (
        <div className={st.dialogsContent}>
            <div className={st.resident}>
                <DailogItem id='1' name='First Name'/>
                <DailogItem id='2' name='Second Name'/>
                <DailogItem id='3' name='Third Name'/>
                <DailogItem id='4' name='Fourth Name'/>
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
                <MessageItem message='Hi' />
                <MessageItem message='Hi 1' />
                <MessageItem message='Hi 2' />
            </div>
        </div>
    );
}

export default Dialogs;