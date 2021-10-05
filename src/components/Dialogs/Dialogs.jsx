import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(dialogs => <DialogsItem name={dialogs.name} id={dialogs.id} />)
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsItems}>
                <div className={classes.name}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    <div className={classes.message}>
                        {messagesElements}
                    </div>
                </div>
            </ul>
            {/* <div className={classes.messages}>
                {messagesElements}
            </div> */}
        </div>
    )
}

export default Dialogs;