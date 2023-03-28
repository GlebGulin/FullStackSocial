import classes from './UserPosts.module.css';

const UserPosts = (props) => {
    return (
        <div>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.postTextContent}>{props.text}</p>
        </div>
    );
}

export default UserPosts;