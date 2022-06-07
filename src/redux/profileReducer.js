const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	posts: [
		{ id: 1, message: 'hi', likesCount: '31' },
		{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing', likesCount: '311' },
		{ id: 3, message: 'consectetur adipisicing', likesCount: '3' },
		{ id: 4, message: 'rem ipsum dolor sit amet', likesCount: '32' },
	],
	newPostText: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText,
			};
		}
		default:
			let stateCopy = { ...state };
			return stateCopy;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST, newText: '', });
export const updateNewPostTextActoinCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text, });


export default profileReducer;