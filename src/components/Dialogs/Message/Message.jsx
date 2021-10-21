import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    // let newMessage = React.createRef();

    // let addMessage = () => {
    //     let message = newMessage.current.value;
    //     alert(message);
    // }

    return (
        <div className={classes.wrapper}>
            <p className={classes.message}>{props.message}</p>
        </div>
    )
}

export default Message;