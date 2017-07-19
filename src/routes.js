import './styles/app.less';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Main route depencies
import Main from './containers/Main';
import MainLayout from './components/main/MainLayout';

const initializeStore = store();

class Handler extends React.Component {
	render() {
		return (
			<Provider store={ initializeStore }>
				<Router history={ browserHistory }>
					<Route path="/" component={ Main }>
						<IndexRoute component={ MainLayout }/>
					</Route>
					<Route path="*" onEnter={() => browserHistory.push('/')} />
				</Router>
			</Provider>
		);
	}
};

ReactDOM.render(<Handler />, document.getElementById('app'));
