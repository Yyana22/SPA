import React from 'react';
import classes from './DialogsItem.module.css'
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <li className={`${classes.dialogsItem} ${classes.dialogsItemActive}`}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </li >
    )
}

export default DialogsItem;