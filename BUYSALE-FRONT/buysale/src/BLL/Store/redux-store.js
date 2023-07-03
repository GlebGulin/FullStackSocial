import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import ProfileReducer from "../Reduces/ProfileReducer";
import DialogReducer from "../Reduces/DialogReducer";
import GalleryReducer from "../Reduces/GalleryReducer";
import UsersReducer from "../Reduces/UsersReducer";
import AuthReducer from "../Reduces/AuthReducer";
import { thunk as thunkMiddleware} from "redux-thunk";

let reducers = combineReducers({
    profilePage  : ProfileReducer,
    dialogPage   : DialogReducer,
    galleryPage  : GalleryReducer,
    usersPage    : UsersReducer,
    auth         : AuthReducer
});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;