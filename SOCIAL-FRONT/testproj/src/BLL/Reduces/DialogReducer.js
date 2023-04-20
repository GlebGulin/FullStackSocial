const UPDATE_CURRENT_MESSAGE = 'UPDATE_CURRENT_MESSAGE';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

//Start initialize profileState after including Redux
let initialState = {
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
    currentMessage : ""
}

const DialogReducer = (state = initialState, action) => {
    debugger;
    let stateCopy =  {};
    switch(action.type){
        case UPDATE_CURRENT_MESSAGE:
            {
                debugger;
                console.log(action.message);
                // let copyState = {...state};
                // copyState.currentMessage = action.message;
                // return copyState;
                stateCopy = {
                    ...state
                }
                stateCopy.currentMessage = action.message;
                return stateCopy;
            }

        case ADD_NEW_MESSAGE:
            {
                debugger;
                let count = state.messageData.length;
                let id = count + 1;
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
        
                today = mm + '-' + dd + '-' + yyyy;
                console.log(today);
                debugger;
                let dialogMessage = {
                    id : id,
                    message : state.currentMessage,
                    author : "Me",
                    date : today
                }

                // let copyState = {...state};
                // copyState.messageData = [...state.messageData]
                // copyState.messageData.push(dialogMessage);
                // copyState.currentMessage = "";
                stateCopy = {
                    ...state,
                    messageData : [...state.messageData],
                    // dialogItems : [...state.dialogItems]
                };
                stateCopy.messageData = [...state.messageData]
                stateCopy.messageData.push(dialogMessage);
                stateCopy.currentMessage = "";
                return stateCopy;
            }

        default:
            return state; 
    }
}

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

export default DialogReducer;