const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";


let initialState = {
    token  : "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImdsZXBzZ3VsaW5AZ21haWwuY29tIiwiZW1haWwiOiJnbGVwc2d1bGluQGdtYWlsLmNvbSIsIm5hbWVpZCI6IjkwMzlmNmYxLWQwOGItNDFhZC1iMjIzLTE2MGJjMzFhOTY5YyIsInJvbGUiOiJDdXN0b21lciIsIm5iZiI6MTY4NTAzNDU0MSwiZXhwIjoxNjg1NjM5MzQxLCJpYXQiOjE2ODUwMzQ1NDF9.OVe_it73fs0NTGJXRAGyKkb3LpX1iiqyywGqDFczZzY",
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
            debugger;
            stateCopy = { ...state };
            stateCopy.userId = action.userData.userId;
            stateCopy.email  = action.userData.email;
            stateCopy.login  = action.userData.login;
            stateCopy.authStatus  = action.userData.resultStatus;
            stateCopy.isAuth = true;
            debugger;
            return stateCopy;

        case SET_AUTH_TOKEN :
            stateCopy = { ...state };
            stateCopy.isAuth = true;
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