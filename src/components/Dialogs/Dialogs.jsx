import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialogs => <DialogsItem name={dialogs.name} id={dialogs.id} />)
    let messagesElements = state.messages.map(message => <Message message={message.message} />)
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>
                        <div>{messagesElements}</div>
                    </div>
                    <div>
                            <div> 
                                <textarea 
                                value ={newMessageBody}
                                onChange={onNewMessageChange}
                                placeholder='Enter Your Message'
                                ></textarea> 
                            </div>
                            <div>
                                <button onClick={onSendMessageClick}>Send</button>
                            </div>
                        </div>
                </div>
            </ul>
        </div>
    )
}

export default Dialogs;