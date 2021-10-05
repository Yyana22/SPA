import React from 'react';
import classes from '../Profile/Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

    return (
        <section >
            <div className={classes.profileWrapper} >
                <ProfileInfo />
                <MyPosts
                    posts={props.posts.posts}
                    dispatch={props.dispatch}
                    newPostText={props.posts.newPostText}
                />
            </div>
        </section>
    )
}

export default Profile;