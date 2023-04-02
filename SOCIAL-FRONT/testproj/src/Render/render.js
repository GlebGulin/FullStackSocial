
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
// import state from './../BLL/State/State'
import App from '../App';

export let ReRender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <BrowserRouter>
     <App 
      state = {state} />
    </BrowserRouter>);
}
export default ReRender;