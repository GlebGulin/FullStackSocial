const SET_USER_DATA = "SET_USER_DATA";
const SET_AUTH_TOKEN = "SET_AUTH_TOKEN";


let initialState = {
    token  : "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImdsZXBzZ3VsaW5AZ21haWwuY29tIiwiZW1haWwiOiJnbGVwc2d1bGluQGdtYWlsLmNvbSIsIm5hbWVpZCI6IjQ4ZjBmNmExLTBlY2YtNDJmNi1hMTg2LThhMzdkMTI0MjQ2ZCIsInJvbGUiOiJDdXN0b21lciIsIm5iZiI6MTY4NTIwMjY4NSwiZXhwIjoxNjg1ODA3NDg1LCJpYXQiOjE2ODUyMDI2ODV9.OdEuKmuE2EAsPVmA1pPaqZJxcuRt1gBk1INZH5HytmA",
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