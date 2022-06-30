import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from '../Sidebar/Sidebar.module.css'

const Sidebar = () => {
	return (
		<nav className={classes.menu}>
			<ul className={classes.menu__links}>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/profile'>Profile</NavLink></li>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/dialogs'>Messages</NavLink></li>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/users'>Users</NavLink></li>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/news'>News</NavLink></li>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/music'>Music</NavLink></li>
				<li><NavLink className={classes.menu__links__link} activeClassName={classes.activeLink} to='/settings'>Settings</NavLink></li>
			</ul>
		</nav >
	)
}

export default Sidebar;