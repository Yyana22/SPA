import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>
            <img src="https://img2.goodfon.ru/wallpaper/nbig/b/6d/mortal-kombat-sab-ziro-5313.jpg" alt="" className={classes.profileInfo__ava} />
            <p className={classes.profileInfo__paragraph1}>Name:</p>
            <p className={classes.profileInfo__paragraph2}>SerName:</p>
            <p className={classes.profileInfo__paragraph3}>LastName:</p>
            <p className={classes.profileInfo__paragraph4}>Age:</p>
        </div>
    )
}

export default ProfileInfo;