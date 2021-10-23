import React from 'react';
import { sendMessageCreator, updateNewMessageBodyActoinCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActoinCreator(body));
    }

    return (
        <Dialogs 
        updateNewMessageBody={onNewMessageChange} 
        sendMessage={onSendMessageClick}
        dialogsPage={state}
        />
    ) 
}

export default DialogsContainer;