import EventEmitter from 'events';

var CHANGE_EVENT = 'change';

// Define the public event listeners and getters that
// the views will use to listen for changes and retrieve
// the store
class Store extends EventEmitter {

	constructor() {
		super();
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

Store.dispatchToken = null;

export default Store;