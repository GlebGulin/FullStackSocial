import logo from './logo.svg';
import './Styles/App.css';
import Header from './Components/Header/Header';
import MainContent from './Components/Content/Content';
import SideMenu from './Components/NavBar/SideMenu';
import Footer from './Components/Footer/Footer';
import Dialogs from './Components/Content/Dialogs/Dialogs';
import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/Content/News/News';
import Gallery from './Components/Content/Gallery/Gallery';
import { addNewPost } from './BLL/State/State';
import { changeStatePost } from './BLL/State/State';

const App = (props) => {
  debugger;
  return (
    // <BrowserRouter>
      <div className="app-container">
        <Header />
        <SideMenu />
        <div className="content-container">
          <Routes>
            <Route path="profile" element={<MainContent profileData={props.state.profileSection.profileData} 
              posts={props.state.profileSection.posts} 
              currentPost = {props.state.profileSection.currentPost}
              addNewPost={addNewPost} 
              changeStatePost = {changeStatePost}
              />} />
            <Route path="messages/*" element={<Dialogs dialogItems={props.state.messageSection.dialogItems} messageData={props.state.messageSection.messageData}/>} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery myGalleryImages={props.state.gallerySection.myGalleryImages}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    // </BrowserRouter>
   
  );
}

export default App;
