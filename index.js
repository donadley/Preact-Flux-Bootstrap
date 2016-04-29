// import the stuff we want to use
import {
	h,
	render,
	Component
} from 'preact';

import {
	Login
} from './login.js'

import UserStore from './stores/UserStore';

class App extends Component {
	componentDidMount() {
		UserStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		UserStore.removeChangeListener(this.onChange);
	}

	render() {
		return (
			<body>
				<div className="container">
			        <div><Login /></div>
	        		<div className="container app-footer">
	          			<h6>Press 'Enter' or click on progress bar for next step.</h6>
	       	 		</div>
	      		</div>
      		</body>
		)
	}

	onChange() {
		this.setState(getState());
	}

}

//render an instance of App into id <placeholder>:
render(<App />, placeholder);