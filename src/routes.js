import './styles/app.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Main route depencies
import Main from './containers/Main';
import ResumeLayout from './components/resume/ResumeLayout';

// Contact route dependencies
import ContactLayout from './components/contact/ContactLayout';

const initializeStore = store();

class Handler extends React.Component {
	render() {
		return (
			<Provider store={ initializeStore }>
				<Router history={ browserHistory }>
					<Route path="/" component={ Main }>
						<IndexRoute component={ ResumeLayout }/>
						<Route path="contact" component={ ContactLayout } />
					</Route>
					<Route path="*" onEnter={() => browserHistory.push('/')} />
				</Router>
			</Provider>
		);
	}
};

ReactDOM.render(<Handler />, document.getElementById('app'));
