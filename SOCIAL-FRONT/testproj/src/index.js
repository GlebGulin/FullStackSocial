import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//state moved to store
// import state from './BLL/State/State';

//Custom Store. Now we get redux store
// import store from './BLL/State/store';

//Use redux-store
import store from './BLL/Store/redux-store';

import ReRender from './Render/render';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Subscribe } from './BLL/State/store';
// import { addNewPost } from './BLL/State/State';
// import { changeStatePost } from './BLL/State/State';
import { dispatch } from './BLL/State/store';

// ReRender(state);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   // <React.StrictMode>
//   // <BrowserRouter>

//     <App 
//       state = {state} 
//       // dialogItems={state.dialogItems} 
//       // messageData={state.messageData} 
//       // myGalleryImages={state.myGalleryImages} 
//       // profileData={state.profileData}
//       // posts = {state.posts}
//       />
//       // </BrowserRouter>
//   // </React.StrictMode>
// );


let ReRenderTree = (st) => {
   debugger;
    // debugger;
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(
    // <BrowserRouter>
    //  <App 
    //   state = {st} 
    //   addNewPost= {addNewPost}
    //   changeStatePost = {changeStatePost}/>
    // </BrowserRouter>);
    ReactDOM.render(
    
    <BrowserRouter>
     <App 
      state = {st} 
      // addNewPost= {addNewPost}
      // changeStatePost = {changeStatePost}

      // addNewPost= {store.addNewPost}
      // changeStatePost = {store.changeStatePost}

      //bind with context of store
      // addNewPost= {store.addNewPost.bind(store)}
      // changeStatePost = {store.changeStatePost.bind(store)}

      dispatch = {store.dispatch.bind(store)}
      />
    </BrowserRouter>, document.getElementById('root'));
}

ReRenderTree(store.getState());
store.subscribe(() => 
{
  let state = store.getState();
  ReRenderTree(state);
});
reportWebVitals();
