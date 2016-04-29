import FluxStore from './FluxStore'
import UserDispatcher from '../dispatchers/UserDispatcher';
import {
	UserConstants
} from '../constants/UserConstants';
import {
	APIConstants
} from '../constants/APIConstants';

let appState = {
	'store': '',
	'view': ''
};

function reset() {
	appState = {};
}

class UserStore extends FluxStore {

	constructor() {
		super();
	}

	getState() {
		return appState;
	}

}

// Initialize the singleton to register with the
// dispatcher and export for React components
let userStoreInstance = new UserStore();


// Register each of the actions with the dispatcher
// by changing the store's data and emitting a
// change
userStoreInstance.dispatchToken = UserDispatcher.register(
	action => {
		switch (action.action.actiontype) {

			case APIConstants.exampleAPI:
				appState = action.action.store;
				userStoreInstance.emitChange();
				break;

			default:
				return true;
		}
	});

export default userStoreInstance;