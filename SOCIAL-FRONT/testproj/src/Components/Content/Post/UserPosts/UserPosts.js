import classes from './UserPosts.module.css';

const UserPosts = (props) => {
    let id='post-'+ props.id;
    return (
        <div id={id}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.postTextContent}>{props.text}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default UserPosts;