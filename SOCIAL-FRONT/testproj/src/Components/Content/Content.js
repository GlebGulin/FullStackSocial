import UserPosts from './UserPosts/UserPosts';
import classes from './Content.module.css';

const MainContent = () => {
    return(
        <div className={classes.MainContent}>
            <p>Will be main content</p>
            <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <UserPosts />
        </div>
    );
}

export default MainContent;