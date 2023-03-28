import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SideMenu.module.css';
const SideMenu = () => {
    return (
        <div className={classes.SideMenu}>
            Will be sidemenu
            <div className={classes.item}>
                <NavLink to="/profile" className={classes.itemLink}>My profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/messages" className={classes.itemLink}>My messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" className={classes.itemLink}>My music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/gallery" className={classes.itemLink}>My photos</NavLink>
            </div>
        </div>
    );
};

export default SideMenu;