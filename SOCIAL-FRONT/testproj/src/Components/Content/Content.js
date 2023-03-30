import UserPosts from './UserPosts/UserPosts';
import NewPost from './NewPost/NewPost';
import Profile from './Profile/Profile';

import st from './Content.module.css';

let posts = [
    {
        id : 1,
        text : 'Message number one',
        author: 'Author',
        date : '05-05-1988'
    },
    {
        id : 2,
        text : 'Message number two',
        author: 'Author',
        date : '05-05-1990'
    }
];

let postsElement = posts.map(post => 
    (<UserPosts id={post.id} text={post.text} author={post.author} date={post.date}/>))

const MainContent = () => {
    return(
        <div>
            <Profile />
            <NewPost />
            {postsElement}
        </div>
    );
}

export default MainContent;