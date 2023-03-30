import React from "react";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    debugger;
    let urlDialog = '/messages/' + props.id;
    let id = "resdondent-"+props.id;
    return (
        <div>
            <NavLink id={id} to={urlDialog}>{props.name}</NavLink>
        </div>
    )
} 

export default DialogItem;