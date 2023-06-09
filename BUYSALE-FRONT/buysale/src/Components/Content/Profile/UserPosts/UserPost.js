import classes from './UserPost.module.css';

const UserPost = (props) => {
    let id='post-'+ props.id;
    debugger;
    return (
        <div id={id}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.postTextContent}>{props.text}</p>
            <p>{props.date}</p>
        </div>
    );
}

export default UserPost;