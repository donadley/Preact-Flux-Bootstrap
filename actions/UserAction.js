// User actions
import UserDispatcher from '../dispatchers/UserDispatcher';
import {
	APIConstants
} from '../constants/APIConstants';
//getURL
import {
	getUrl,
	getResponse
} from '../util/UserAPI';

import objectAssign from 'object-assign';

import axios from 'axios';

export function exampleAction(store) {



	axios({
			method: 'get',
			url: getUrl,
			headers: {
				'Accept': 'application/json',
				'Context-Type': 'text/html; charset=utf-8'
			}
		})
		.then(function(response) {
			logResponse(response);
			return objectAssign(store, getResponse(response));
		}).then(store => dispatchServerAction(APIConstants.exampleAPI, store)) // passed to the store after REST response
		.catch(function(response) {
			if (response instanceof Error) {
				// Something happened in setting up the request that triggered an Error
				console.log('Error', response.message);
			} else {
				// The request was made, but the server responded with a status code
				// that falls out of the range of 2xx
				console.log(response.data);
				console.log(response.status);
				console.log(response.headers);
				console.log(response.config);
				//TODO: handle error
			}
		})

	function dispatchServerAction(action, store) {
		UserDispatcher.handleServerAction({
			actionType: action,
			store: store,
		});
	}
}