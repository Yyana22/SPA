// import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, unFollowActionCreator, setUsersActionCreator } from '../../redux/usersReducer';
import Users from './Users';

let mapStateToProps = (state) => {
	return {
		users: state.usersPage.users
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followActionCreator(userId))
		},
		unfollow: (userId) => {
			dispatch(unFollowActionCreator(userId))
		},
		setUsers: (users) => {
			dispatch(setUsersActionCreator(users))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);