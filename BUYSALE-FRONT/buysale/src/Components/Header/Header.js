import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import Login  from './../Login/Login/Login';

const Header = (props) => {
    console.log("Print props in header");
    console.log(props);
    console.log(props.auth.isAuth);
    return (
        <div className={classes.headerApp}>
            <div className={classes.mainMenu}>
                <a href="#">Store</a>
                <a href="#">Service</a>
            </div>
            <div className={classes.loginBlock}>
                {props.auth.isAuth === true ?  <p>{props.auth.login}</p> :  <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;