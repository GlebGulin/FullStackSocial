
import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import state from './../BLL/State/State'
import App from '../App';

export let ReRender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    // <BrowserRouter>
    //  <App 
    //   state = {state} />
    // </BrowserRouter>);
    ReactDOM.render(
    <BrowserRouter>
     <App 
      state = {state} />
    </BrowserRouter>, document.getElementById('root'));
}
export default ReRender;