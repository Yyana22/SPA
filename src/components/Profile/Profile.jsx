import React from 'react';
import classes from '../Profile/Profile.module.css'
import MyPostsContainer from './MyPost/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {

	return (
		<section >
			<div className={classes.profileWrapper} >
				<ProfileInfo />
				<MyPostsContainer />
			</div>
		</section>
	)
}

export default Profile;