import React from "react";

const MessageItem = (props) => {
    let id="message-" + props.id;
    return(<div>
        <p id={id}>{props.message}</p>
    </div>)
}

export default MessageItem;