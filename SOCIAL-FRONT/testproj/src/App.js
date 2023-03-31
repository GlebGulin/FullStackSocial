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

const App = (props) => {
  debugger;
  return (
   
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <SideMenu />
        <div className="content-container">
          <Routes>
            <Route path="profile" element={<MainContent profileData={props.profileData} posts={props.posts}/>} />
            <Route path="messages/*" element={<Dialogs dialogItems={props.dialogItems} messageData={props.messageData}/>} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery myGalleryImages={props.myGalleryImages}/>} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
   
  );
}

export default App;
