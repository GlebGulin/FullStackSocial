import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './SideMenu.module.css';
const SideMenu = () => {
    return (
        <div className={classes.SideMenu}>
            Menu
            <div className={classes.item}>
                <NavLink to="/profile" 
                    className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        My profile
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/messages" 
                    className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        My messages
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/news" 
                    className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        News
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/gallery" 
                    className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        My photos
                </NavLink>
            </div>

            <div className={classes.item}>
                <NavLink to="/users" 
                    className = { navData => navData.isActive ? classes.activeLink : classes.item }>
                        Users
                </NavLink>
            </div>
        </div>
    );
};

export default SideMenu;