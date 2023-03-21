import classes from './SideMenu.module.css';
const SideMenu = () => {
    return (
        <div className={classes.SideMenu}>
            Will be sidemenu
            <div className={classes.item}>
                <a href="#" className={classes.itemLink}>My profile</a>
            </div>
            <div className={classes.item}>
                <a href="#" className={classes.itemLink}>My music</a>
            </div>
            <div className={classes.item}>
                <a href="#" className={classes.itemLink}>My photos</a>
            </div>
        </div>
    );
};

export default SideMenu;