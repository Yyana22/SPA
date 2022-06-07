import React from 'react';
import classes from './Message.module.css'

const Message = (props) => {

	return (
		<div className={classes.wrapper}>
			<p className={classes.message}>{props.message}</p>
		</div>
	)
}

export default Message;