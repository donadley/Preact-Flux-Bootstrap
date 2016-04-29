import {
	h,
	render,
	Component
} from 'preact';

import * as UserAction from './actions/UserAction';
import {
	BaseConstants
} from './constants/UserConstants';
import objectAssign from 'object-assign';

let store = objectAssign(BaseConstants);
let ENTER_KEY_CODE = 13;

class Login extends Component {
	constructor(props) {
		super(props);
		//Bind functions to receive data
		this.handleEmailChanged = this.handleEmailChanged.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		this.store = this.store.bind(this);
	}

	handleEmailChanged(event) {
		store.email = event.target.value;
		this.setState(store);
	}

	store(event) {
		//action		
		console.log(store)
		UserAction.exampleAction(store);
	}

	onKeyDown(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this.store(event);
		}
	}

	render() {
		return (
			<div>
          		<div className="row">
          			<div className="six columns">
          				<label>Email</label>
          				<input className="u-full-width" placeholder="Email" 
          					type="text"
					        onChange={this.handleEmailChanged} 
				          	value={this.state.email}
				          	autoFocus/>
          			</div>
          		</div>	         
	          	<div className="row">
		          	<div className="six columns">
        				  <button onClick={ event => this.store(event) }>Submit</button>
		          	</div>
	          	</div>
          	</div>
		)
	}
}

export {
	Login
};