import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let message = newMessage.current.value;
        alert(message);
    }

    return (
        <div className={classes.wrapper}>
            <p className={classes.message}>{props.message}</p>
            <textarea ref={newMessage} name="" id="" cols="30" rows="10"></textarea>
            <button onClick={addMessage}>ОТПРАВИТЬ</button>
        </div>
    )
}

export default Message;