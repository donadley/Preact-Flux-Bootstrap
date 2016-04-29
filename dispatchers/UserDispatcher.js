// Dispatcher with actions responding to both
// view and server actions
import {
	Dispatcher
} from 'flux';

class UserDispatcher extends Dispatcher {

	handleViewAction(action) {
		this.dispatch({
			source: 'VIEW_ACTION',
			action: action,
		});
	}

	handleServerAction(action) {
		this.dispatch({
			source: 'SERVER_ACTION',
			action: action,
		});
	}
}

const AppDispatcher = new UserDispatcher();

export default AppDispatcher;