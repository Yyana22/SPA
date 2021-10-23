const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.1' },
        { id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.2' },
        { id: 3, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.3' },
        { id: 4, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.4' },
        { id: 5, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.5' },
    ],
    dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 1, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE, newText: '', });
export const updateNewMessageBodyActoinCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body, });



export default dialogsReducer;