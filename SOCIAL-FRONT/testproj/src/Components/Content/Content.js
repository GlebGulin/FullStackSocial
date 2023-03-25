import UserPosts from './UserPosts/UserPosts';
import NewPost from './NewPost/NewPost';

import st from './Content.module.css';

const MainContent = () => {
    return(
        <div>
            <p>Will be main content</p>
            <img src="https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <NewPost />
            <UserPosts text="Message number one"/>
        </div>
    );
}

export default MainContent;