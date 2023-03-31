import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let props = {
  dialogItems : [
    {
      id : 1,
      name : 'First Name'
    },
    {
        id : 2,
        name : 'Second Name'
    },
    {
        id : 3,
        name : 'Third Name'
    },
  ],

  messageData : [
    {
        id : 1,
        message : 'First message',
        date: '02-02-1982'
    },
    {
        id : 2,
        message : 'Second message',
        date : '03-03-1995'
    },
    {
        id : 3,
        message : 'Third message',
        date : '12-12-2005'
    },
  ],

  myGalleryImages : [
    {
        id: "1",
        url : `https://bossautoukraine.com.ua/assets/car_cheaper_than.png`
    },
    {
        id: "2",
        url : `https://focus.ua/static/storage/thumbs/920x465/e/8a/d6ea711e-c6ab471101868870461d0628925cb8ae.jpg?v=6495_1`
    }
  ],

  profileData : {
    id : 'gfghgf-gfhgfhgfh-hfghgfhgf-ghgfhghjghjgh',
    firstName : "John",
    lastName : "Malkovich",
    preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2FqTQbw1nYLs0-rj4_c7vLOhtemYtQtm5m4v-DBTmQ&s',
    age : 34
  },
  posts : [
    {
      id : 1,
      text : 'Message number one',
      author: 'Author',
      date : '05-05-1988'
    },
    {
        id : 2,
        text : 'Message number two',
        author: 'Author555',
        date : '05-05-1990'
    }
  ]
};
root.render(
  <React.StrictMode>
    <App dialogItems={props.dialogItems} 
      messageData={props.messageData} 
      myGalleryImages={props.myGalleryImages} 
      profileData={props.profileData}
      posts = {props.posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
