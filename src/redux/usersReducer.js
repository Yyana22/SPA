// import { act } from "react-dom/test-utils";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		// { id: 1, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: true, fullName: 'Lena', status: 'HI SISTER', location: { city: 'Minsk', country: 'Belarus' } },
		// { id: 2, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: false, fullName: 'Vlada', status: 'HI SISTER2', location: { city: 'Moscow', country: 'Russia' } },
		// { id: 3, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: true, fullName: 'Yana', status: 'HI SISTER3', location: { city: 'Kiev', country: 'Ukrane' } },
		// { id: 4, photoUrl: 'https://gadanie-da.ru/wp-content/uploads/2020/11/%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B933.jpg', followed: false, fullName: 'Ann', status: 'HI SISTER4', location: { city: 'Minsk', country: 'Belarus' } },
	],
};

const usersReduser = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}
		case SET_USERS: {
			return { ...state, users: [...state.users, ...action.users] }
		}
		default:
			return state;
	}
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unFollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReduser;