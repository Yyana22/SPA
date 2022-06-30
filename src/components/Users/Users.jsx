import React from 'react';
import classes from './Users.module.css'

const Users = (props) => {

	if (props.users.length === 0) {
		props.setUsers([
			{ id: 1, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: true, fullName: 'Lena', status: 'HI SISTER', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: 2, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: false, fullName: 'Vlada', status: 'HI SISTER2', location: { city: 'Moscow', country: 'Russia' } },
			{ id: 3, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: true, fullName: 'Yana', status: 'HI SISTER3', location: { city: 'Kiev', country: 'Ukrane' } },
			{ id: 4, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: false, fullName: 'Ann', status: 'HI SISTER4', location: { city: 'Minsk', country: 'Belarus' } },

		])
	}

	return (
		<div>
			{
				props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photoUrl} alt="ava" className={classes.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button className={classes.button} onClick={() => props.unfollow(u.id)}>unfollow</button>
								: <button className={classes.button} onClick={() => props.follow(u.id)}>follow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>{u.fullName}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{u.location.country}</div>
							<div>{u.location.city}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	)
}

export default Users;