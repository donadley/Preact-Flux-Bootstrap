// User API logic
import axios from 'axios';

//Should move to file
let baseEndpoint = 'http://your-api-here';
let restEndpoint = '/your-restEndpoint-here';

export function getUrl() {
	return baseEndpoint + restEndpoint
}

export function getResponse(response) {
	console.log(response.method);
	console.log(response.statusCode);
	console.log(response.statusMessage);
	console.log(response.headers);
}