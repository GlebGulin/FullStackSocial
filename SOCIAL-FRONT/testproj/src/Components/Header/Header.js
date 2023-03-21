import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.headerApp}>
            <div className={classes.mainMenu}>
                <a href="#">Main Page</a>
                <a href="#">Settings</a>
            </div>
        </div>
    );
}

export default Header;