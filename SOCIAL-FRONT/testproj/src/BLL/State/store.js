import ReRender from "../../Render/render";
import DialogReducer from '../Reduces/DialogReducer';
import GalleryReducer from '../Reduces/GalleryReducer';
import ProfileReducer from '../Reduces/ProfileReducer';

//#region common
const baseUrl = 'https://fdhgfhgf'
//#endregion common

//#region ProfilePage
//wib be removed to resuced
const UPDATE_CURRENT_POST = 'UPDATE_CURRENT_POST';
const ADD_NEW_POST = 'ADD_NEW_POST';
//#endregion ProfilePage 

//#region DialogPage
const UPDATE_CURRENT_MESSAGE = 'UPDATE_CURRENT_MESSAGE';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
//#endregion DialogPage

// Moved to store
// let ReRenderTree = () => {
//     console.log('Temporary rerender');
// }

let store = {

    //Moved to reducers after include redux
    // _state : {
    //     profilePage : {
    //         profileData : {
    //             id : 'gfghgf-gfhgfhgfh-hfghgfhgf-ghgfhghjghjgh',
    //             firstName : "John",
    //             lastName : "Malkovich",
    //             preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2FqTQbw1nYLs0-rj4_c7vLOhtemYtQtm5m4v-DBTmQ&s',
    //             age : 34
    //         },
    //         posts : [
    //             {
    //                 id : 0,
    //                 text : 'Message number one',
    //                 author: 'Author',
    //                 date : '05-05-1988'
    //             },
    //             {
    //                 id : 1,
    //                 text : 'Message number two',
    //                 author: 'Author555',
    //                 date : '05-05-1990'
    //             }
    //         ],
    //         currentPost : ""
    //     },
    
    //     dialogPage : {
    //         dialogItems : [
    //             {
    //               id : 1,
    //               name : 'First Name'
    //             },
    //             {
    //                 id : 2,
    //                 name : 'Second Name'
    //             },
    //             {
    //                 id : 3,
    //                 name : 'Third Name'
    //             },
    //         ],
    
    //         messageData : [
    //             {
    //                 id : 1,
    //                 message : 'First message',
    //                 date: '02-02-1982'
    //             },
    //             {
    //                 id : 2,
    //                 message : 'Second message',
    //                 date : '03-03-1995'
    //             },
    //             {
    //                 id : 3,
    //                 message : 'Third message',
    //                 date : '12-12-2005'
    //             },
    //         ],
    //         currentMessage : ""
    //     },
    //     galleryPage : {
    //         myGalleryImages : [
    //             {
    //                 id: "1",
    //                 url : `https://bossautoukraine.com.ua/assets/car_cheaper_than.png`
    //             },
    //             {
    //                 id: "2",
    //                 url : `https://focus.ua/static/storage/thumbs/920x465/e/8a/d6ea711e-c6ab471101868870461d0628925cb8ae.jpg?v=6495_1`
    //             }
    //         ]
    //     }
    // },

    ReRenderTree(){
        console.log('Temporary rerender. Store was changed');
    },

    _addNewPost(){
        debugger;
        let count = this._state.profileSection.posts.length;
        let id = count;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '-' + dd + '-' + yyyy;
        console.log(today);

        let newPost = {
            id : id,
            message : this._state.profileSection.currentPost,
            author : "Me",
            date : today
        }
        this._state.profileSection.posts.push(newPost);
        // alert('try add post ' + message);
        this._state.profileSection.currentPost = "";
        this.ReRenderTree(this._state);
    },

    _changeStatePost(message){
        // alert(message)
        debugger;
        console.log(message);
        console.log(this);
        this._state.profileSection.currentPost = message;
        this.ReRenderTree(this._state);
    },

    _addNewMessage(){
        debugger;
        let count = this._state.messageSection.messageData.length;
        let id = count;
        let dialogMessage = {
            id : id,
            message : this._state.messageSection.currentMessage,
            author : "Me",
            date : '05-05-2022'
        }
        this._state.messageSection.messageData.push(dialogMessage);
        // alert('try add post ' + message);
        this._state.messageSection.currentMessage = "";
        this.ReRenderTree(this._state);
    },

    _changeStateMessage(message){
        // alert(message)
        debugger;
        console.log(message);
        console.log(this);
        this._state.messageSection.currentMessage = message;
        this.ReRenderTree(this._state);
    },

    dispatch(action){
        debugger;
        this._state.profileSection = ProfileReducer(this._state.profileSection, action);
        this._state.messageSection = DialogReducer(this._state.messageSection, action);
        this._state.gallerySection = GalleryReducer(this._state.gallerySection, action);
        
        this.ReRenderTree(this._state);

        //moded to reducers
        // switch (action.type) {
        //     case ADD_NEW_POST:
        //         this._addNewPost();
        //         // debugger;
        //         // let count = this._state.profileSection.posts.length;
        //         // let id = count - 1;
        //         // let newPost = {
        //         //     id : id,
        //         //     text : this._state.profileSection.currentPost,
        //         //     author : "Me",
        //         //     date : '05-05-2022'
        //         // }
        //         // this._state.profileSection.posts.push(newPost);
        //         // // alert('try add post ' + message);
        //         // this._state.profileSection.currentPost = "";
        //         // this.ReRenderTree(this._state);
        //         break;

        //     case UPDATE_CURRENT_POST:
        //         // debugger;
        //         // console.log(action.message);
        //         // console.log(this);
        //         // this._state.profileSection.currentPost = action.message;
        //         // this.ReRenderTree(this._state);
        //         this._changeStatePost(action.message)
        //         break;
        //     case ADD_NEW_MESSAGE:
        //         this._addNewMessage();
        //         break;
        //     case UPDATE_CURRENT_MESSAGE:
        //         this._changeStateMessage(action.message);
        // }
    },

    getProfileState(){
        return this._state.profileSection;
    },

    getDialogState(){
        return this._state.messageSection;
    },

    getGalleryState(){
        return this._state.gallerySection;
    },

    getState(){
        return this._state;
    },

    Subscribe(observer){
        this.ReRenderTree = observer;
    }
}


// Moved to store
// let state = {
//     profileSection : {
//         profileData : {
//             id : 'gfghgf-gfhgfhgfh-hfghgfhgf-ghgfhghjghjgh',
//             firstName : "John",
//             lastName : "Malkovich",
//             preview : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF2FqTQbw1nYLs0-rj4_c7vLOhtemYtQtm5m4v-DBTmQ&s',
//             age : 34
//         },
//         posts : [
//             {
//               id : 0,
//               text : 'Message number one',
//               author: 'Author',
//               date : '05-05-1988'
//             },
//             {
//                 id : 1,
//                 text : 'Message number two',
//                 author: 'Author555',
//                 date : '05-05-1990'
//             }
//         ],
//         currentPost : ""
//     },

//     messageSection : {
//         dialogItems : [
//             {
//               id : 1,
//               name : 'First Name'
//             },
//             {
//                 id : 2,
//                 name : 'Second Name'
//             },
//             {
//                 id : 3,
//                 name : 'Third Name'
//             },
//         ],

//         messageData : [
//             {
//                 id : 1,
//                 message : 'First message',
//                 date: '02-02-1982'
//             },
//             {
//                 id : 2,
//                 message : 'Second message',
//                 date : '03-03-1995'
//             },
//             {
//                 id : 3,
//                 message : 'Third message',
//                 date : '12-12-2005'
//             },
//         ],
//     },

//     gallerySection : {
//         myGalleryImages : [
//             {
//                 id: "1",
//                 url : `https://bossautoukraine.com.ua/assets/car_cheaper_than.png`
//             },
//             {
//                 id: "2",
//                 url : `https://focus.ua/static/storage/thumbs/920x465/e/8a/d6ea711e-c6ab471101868870461d0628925cb8ae.jpg?v=6495_1`
//             }
//         ]
//     }
// };

// Moved to store
// export let addNewPost = () => {
//     debugger;
//     let count = state.profileSection.posts.length;
//     let id = count - 1;
//     let newPost = {
//         id : id,
//         text : state.profileSection.currentPost,
//         author : "Me",
//         date : '05-05-2022'
//     }
//     state.profileSection.posts.push(newPost);
//     // alert('try add post ' + message);
//     state.profileSection.currentPost = "";
//     ReRenderTree(state);
// }

// Moved to store
// export let changeStatePost = (message) => {
//     // alert(message)
//     console.log(message);
//     state.profileSection.currentPost = message;
//     ReRenderTree(state);
// }

// export let Subscribe = (observer) => {
//     ReRenderTree = observer;
// }

//#region ActionCreator
//#region ProfilePage
export const addNewPostActionCreator = () => {
    return {
        type : ADD_NEW_POST
    }
}

export const updateCurrentPostCreator = (message) => {
    return {
        type : UPDATE_CURRENT_POST,
        message : message
    }
}
//#endregion ProfilePage

//#region DialogPage
export const addNewMessageActionCreator = () => {
    return {
        type : ADD_NEW_MESSAGE
    }
}

export const updateCurrentMessageCreator = (message) => {
    debugger;
    return {
        type : UPDATE_CURRENT_MESSAGE,
        message : message
    }
}
//#endregion DialogPage

//#endregion ActionCreator

export default store;