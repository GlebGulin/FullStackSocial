import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/Content/Profile/ProfileContainer';
import SideMenu from './Components/NavBar/SideMenu';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Content/Dialogs/Dialog';
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/Content/News/News';
import GalleryContainer from './Components/Content/Gallery/GalleryContainer';
import { addNewPost } from './BLL/State/store';
import { changeStatePost } from './BLL/State/store';
import DialogContainer from './Components/Content/Dialogs/DialogContainer';
import ProfileContainer from './Components/Content/Profile/ProfileContainer';
// import ProviderDialogContainer from './Components/Content/Dialogs/DialogContainer;'


//Using Redux store and props
// const App = (props) => {
//   debugger;
//   return (
//     // <BrowserRouter>
//       <div className="app-container">
//         <Header />
//         <SideMenu />
//         <div className="content-container">
//           <Routes>
//             <Route path="profile" 
//               element={<MainContent 
//                 profileData={props.state.profilePage.profileData} 
//                 posts={props.state.profilePage.posts} 
//                 currentPost = {props.state.profilePage.currentPost}
//                 // addNewPost={props.addNewPost} 
//                 // changeStatePost = {props.changeStatePost}
//                 dispatch = {props.dispatch}
//                 store = {props.store}
//               />} />
//             <Route path="messages/*" element={<DialogContainer
//               dialogItems={props.state.dialogPage.dialogItems} 
//               messageData={props.state.dialogPage.messageData}
//               dispatch = {props.dispatch}
//               store = {props.store}
//               />} />
//             <Route path="news" element={<News />} />
//             <Route path="gallery" element={<Gallery myGalleryImages={props.state.galleryPage.myGalleryImages}/>} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     // </BrowserRouter>
   
//   );
// }

//Using Custom Context without react-redux library
const App = () => {
  debugger;
  return (
    // <BrowserRouter>
      <div className="app-container">
        <Header />
        <SideMenu />
        <div className="content-container">
          <Routes>
            <Route path="profile" 
              element={<ProfileContainer />} />
            {/* <Route path="messages/*" element={<DialogContainer
              />} /> */}
            {/* After include react-redux library */}
            <Route path="messages/*" element={<DialogContainer
              />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<GalleryContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    // </BrowserRouter>
   
  );
}


export default App;
