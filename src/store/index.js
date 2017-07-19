import { createStore, combineReducers } from 'redux';
import reducer from '../reducers';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/**
 * combine reducers so they can be merged for initialState
 */
const rootReducer = combineReducers({
	reducer
});

/* eslint-disable no-underscore-dangle */
/**
 * Combines application reducers with initial state.
 * Connects application to redux dev tools chrome plugin.
 *
 * @param {object} initialState 	unmodified application state.
 * @return {object} 				application actions, reducers and state.
 */
export default function configure(initialState = {}) {
	const store = createStore(rootReducer, initialState, reduxDevTools);

	return store;
}
/* eslint-enable */
