import UserPosts from './UserPosts/UserPosts';
import NewPost from './NewPost/NewPost';
import Profile from './Profile/Profile';

import st from './Content.module.css';

const MainContent = () => {
    return(
        <div>
            <Profile />
            <NewPost />
            <UserPosts text="Message number one" author='Author 1'/>
            <UserPosts text="Message number two" author='Author 2'/>
        </div>
    );
}

export default MainContent;