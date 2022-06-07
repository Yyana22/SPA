import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
	_state: {

		profilePage: {
			posts: [
				{ id: 1, message: 'hi', likesCount: '31' },
				{ id: 2, message: 'Lorem ipsum dolor sit amet consectetur adipisicing', likesCount: '311' },
				{ id: 3, message: 'consectetur adipisicing', likesCount: '3' },
				{ id: 4, message: 'rem ipsum dolor sit amet', likesCount: '32' },
			],
			newPostText: '',
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.1' },
				{ id: 2, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.2' },
				{ id: 3, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.3' },
				{ id: 4, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.4' },
				{ id: 5, message: 'Lorem ipsum, dolor sit amet consectetur adipisicing.5' },
			],
			dialogs: [
				{ id: 1, name: "Dimych" },
				{ id: 2, name: "Andrey" },
				{ id: 3, name: "Sveta" },
				{ id: 4, name: "Sasha" },
				{ id: 5, name: "Viktor" },
			],
			newMessageBody: '',
		},
		sidebar: {
			people: [
				{ smile: "=|", name: "Dimych" },
				{ smile: "=(", name: "Andrey" },
				{ smile: "=)", name: "Sveta" },
			],
			startMessage: [
				{ sms: 'hi...' },
				{ sms: 'he...' },
				{ sms: 'ho...' },
			],
		}
	},
	_callSubscriber() {
		console.log('state changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer; // паттерн
	},

	dispatch(action) { // { type: 'ADD-POST' }

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
	},
}
export default store;
window.store = store; // удобно смотреть в консоли state
