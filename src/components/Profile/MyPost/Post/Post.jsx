import React from 'react';
import classes from './Post.module.css'
import like from './img/heart.svg'
const Post = (props) => {
    return (
        <div className={classes.item}>
            <img srcSet="https://i.pinimg.com/originals/d8/2e/71/d82e71bd1d3b0c6874c61073c98d92d0.jpg" alt="" />
            <p className={classes.messages}>
                {props.message}
            </p>
            <div className={classes.imgLikes}>
                <span>Like:</span>
                <p className={classes.countLikes}>
                    {props.likesCount}
                </p>
            </div>
            <img className={classes.img} src={like} alt="" srcset="" />
        </div>
    )
}
export default Post;