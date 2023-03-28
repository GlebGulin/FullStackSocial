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

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <SideMenu />
        <div className="content-container">
          <Routes>
            <Route path="profile" element={<MainContent />} />
            <Route path="messages/*" element={<Dialogs />} />
            <Route path="news" element={<News />} />
            <Route path="gallery" element={<Gallery />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
   
  );
}

export default App;
