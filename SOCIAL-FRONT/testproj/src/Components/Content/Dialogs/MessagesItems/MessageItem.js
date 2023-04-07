import React from "react";
import style from './../Dialogs.module.css';

const MessageItem = (props) => {
    // debugger;
    let id="message-" + props.id;
    return(<div className={style.dialogItem}>
        <p id={id}>{props.message}</p>
        <p>{props.date}</p>
    </div>)
}

export default MessageItem;