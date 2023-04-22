import { combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from "../Reduces/ProfileReducer";
import DialogReducer from "../Reduces/DialogReducer";
import GalleryReducer from "../Reduces/GalleryReducer";
import UsersReducer from "../Reduces/UsersReducer";

let reducers = combineReducers({
    profilePage : ProfileReducer,
    dialogPage : DialogReducer,
    galleryPage : GalleryReducer,
    usersPage : UsersReducer
});
let store = createStore(reducers);

export default store;