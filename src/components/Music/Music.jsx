import React from 'react';
import classes from '../Music/Music.module.css'
const Music = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.menu}>
                <ul className={classes.menuUl}>
                    <li className={classes.menuLi}><a className={`${classes.menuA} ${classes.menuActive}`} href="#s">My music</a></li>
                    <li className={classes.menuLi}><a className={classes.menuA} href="#s">Play list</a></li>
                    <li className={classes.menuLi}><a className={classes.menuA} href="#s">Advice</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Music;