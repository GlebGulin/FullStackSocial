const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";


let initialState = {
    token  : null,
    userId : null,
    email  : null,
    login  : null,
    authStatus : null,
    isAuth : false
}

const AuthReducer = (state = initialState, action) => {
    debugger;
    let stateCopy = {};
    switch(action.type){
        case SET_USER_DATA :
            alert("SET_USER_DATA");
            console.log("SET_USER_DATA");
            console.log(action);
            debugger;
            stateCopy = { ...state };
            stateCopy.userId = action.userData.userId;
            stateCopy.email  = action.userData.email;
            stateCopy.login  = action.userData.login;
            stateCopy.authStatus  = action.userData.resultStatus;
            stateCopy.isAuth = true;
            console.log(action);
            debugger;
            return stateCopy;

        case SET_AUTH_TOKEN :
            stateCopy = { ...state };
            console.log("Action");
            console.log(action);
            stateCopy.isAuth = true;
            console.log(action.token);
            stateCopy.token = action.token;
            alert("Token was setup success");
            return stateCopy;
        
        default:
            return state;
    }
}

export const setUserData = (userData) => {
    debugger;
    return {
        type       : SET_USER_DATA,
        userData   : userData
    }
}

export const setAuthToken = (token) => {
    return {
        type       : SET_AUTH_TOKEN,
        token      : token
    }
}


export default AuthReducer;