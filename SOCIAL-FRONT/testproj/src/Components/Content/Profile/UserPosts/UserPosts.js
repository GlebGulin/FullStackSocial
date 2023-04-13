import UserPost from "./UserPost";

const UserPosts = (props) => {
    debugger;
    let postsElement = props.state.map(post => 
        (<UserPost id={post.id} text={post.text} author={post.author} date={post.date}/>))
    debugger;
    return(
        <div>
            {postsElement}
        </div>
    );
}

export default UserPosts;