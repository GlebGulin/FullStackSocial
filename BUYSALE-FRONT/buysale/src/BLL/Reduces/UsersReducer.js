const FOLLOW                  = "FOLLOW";
const UNFOLLOW                = "UNFOLLOW";
const SET_STAE                = "SET_STATE";
const SET_DATA_LOCAL_SERVER   = "SET_DATA_LOCAL_SERVER";
const SET_PAGECOUNT           = "SET_PAGECOUNT";
const CLEAR_LIST_USER         = "CLEAR_LIST_USER";
const SET_CURRENTPAGE         = "SET_CURRENTPAGE";
const CHANGE_FETCHING_STATUS  = "CHANGE_FETCHING_STATUS";
const CHANGE_FOLLOWING_STATUS = "CHANGE_FOLLOWING_STATUS";

//Start initialize profileState after including Redux
let initialState = {
    users : [
        /*{
            id : "456345325665464",
            country : "Ukraine",
            city : "Kiev",
            name : "Tatiana Ugolkova",
            followed : true,
            avat : "https://i.ebayimg.com/images/g/rZoAAOSwbxxhwKJv/s-l500.jpg",
            status : "I am ready"
        },
        {
            id : "45645646554544654654654",
            country : "Deutchland",
            city : "Berlin",
            name : "Natasha Sex",
            followed : true,
            avat : "https://images.nubiles-porn.com/models/natasha_nice/natasha_nice640.jpg",
            status : "Call me"
        },
        {
            id : "45645646554544654654543534654",
            country : "USA",
            city : "New York",
            name : "Savannah Watson",
            followed : true,
            avat : "https://i.pinimg.com/1200x/a3/51/b7/a351b79ed09296e261458e037be28058.jpg",
            status : "Where are you"
        },
        {
            id : "45645646554544654654543534544654",
            country : "Moldova",
            city : "Kisineu",
            name : "Savannah Watson",
            followed : false,
            avat : "https://ic-tt-lm.xhcdn.com/a/ZjkzYjA4NmUzZmYzZWU3MmM0ZjdlM2E0MTY0N2U3MTU/webp/000/098/443/avatar2.jpg.v1643986017",
            status : "Where are you"
        }*/
    ],
    pageCount             : 0,
    currentPage           : 1,
    totalCount            : 0,
    pageSize              : 5,
    isFetching            : false,
    isFollowingInProgress : false,
    FollowInProgress      : []
}

const UsersReducer = (state = initialState, action) => {
    debugger;
    let stateCopy = {};
    switch(action.type){
        case FOLLOW :
            stateCopy = {
                ...state,
                // users : [...state.users],
                //Change status of one user
                users : state.users.map(u => {
                    if(u.id === action.id){
                        // u.status = true;
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
            return stateCopy;
        case UNFOLLOW :
            stateCopy = {
                ...state,
                users : state.users.map(u => {
                    if(u.id === action.id){
                        // u.status = false;
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
            return stateCopy;
        case SET_STAE :
            //Merge new and old arrays
            debugger;
            return {...state, users : [...state.users, ...action.users]}
        case SET_DATA_LOCAL_SERVER:
            debugger;
            stateCopy = {...state};
            for (var i = 0; i < action.users.length; i++){
                var itemUser = {
                    id : action.users[i].id,
                    avat : action.users[i].avatar,
                    name : action.users[i].name,
                    status : action.users[i].userStatus,
                    city : action.users[i].city,
                    country : action.users[i].country,
                    followed : action.users[i].followed
                };
                stateCopy.users.push(itemUser);
            }
            return stateCopy
        case SET_PAGECOUNT:
            debugger;
            stateCopy = {
                ...state
            };
            stateCopy.pageCount = action.pageCount;
            return stateCopy;

        case SET_CURRENTPAGE :
            debugger;
            // alert(action.pageNumber);
            stateCopy = {
                ...state
            };
            stateCopy.currentPage = action.pageNumber
            return stateCopy;
        case CLEAR_LIST_USER :
            stateCopy = {...state, users : []};
            return stateCopy;
        case CHANGE_FETCHING_STATUS:
            stateCopy = {
                ...state
            };
            stateCopy.isFetching = action.preloadStatus;
            return stateCopy;

        case CHANGE_FOLLOWING_STATUS:
            stateCopy = {
                ...state,
                isFollowInProgress : action.isFollowingInProgress,
                FollowInProgress : action.isFollowingInProgress ? [...state.FollowInProgress, action.userId] : state.FollowInProgress.filter(id => id != action.userId)
            }
            debugger;
            // stateCopy.isFollowInProgress = action.followingStatus;
            // alert("Fetching status is " + stateCopy.isFollowInProgress);
            return stateCopy;
        default:
            return state;
    }
}

export const followUser = (id) => {
    return {
        type : FOLLOW,
        id  : id
    }
}

export const unfollowUser = (id) => {
    return {
        type : UNFOLLOW,
        id   : id
    }
}



export const set_State = (users) => {
    debugger;
    return {
        type : SET_STAE,
        users : users
    }
}

export const set_Data_Local_Server = (users) =>{
    debugger;
    return {
        type : SET_DATA_LOCAL_SERVER,
        users : users
    }
}

export const setPageCount = (count) => {
    debugger;
    return {
        type : SET_PAGECOUNT,
        pageCount   : count
    }
}

export const setCurrentPage = (page) => {
    debugger;
    return {
        type : SET_CURRENTPAGE,
        pageNumber   : page
    }
}

export const clearUsersList = () => {
    debugger;
    return {
        type : CLEAR_LIST_USER
    }
}

export const changeFetchingStatus = (status) => {
    return {
        type          : CHANGE_FETCHING_STATUS,
        preloadStatus : status
    }
}

export const changeFollowingStatus = (status, userId) => {
    debugger;
    return{
        type                  : CHANGE_FOLLOWING_STATUS,
        isFollowingInProgress : status,
        userId                : userId
    }
}

export default UsersReducer;