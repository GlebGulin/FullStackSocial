import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.headerApp}>
            <div className={classes.mainMenu}>
                <a href="#">Store</a>
                <a href="#">Service</a>
            </div>
        </div>
    );
}

export default Header;