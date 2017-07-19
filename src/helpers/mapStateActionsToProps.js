import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

/**
 * Connects component with actions & state, by attaching to the props of the component
 * @function
 * @param {Class} Component - react component
 * @param {object} Actions - methods derived from actionCreator.
 * @param [Array] requestState - optional to request specific reducers from combinedReducers
 *
 * @options
 * 1. All your actions, all your state
 * 2. All your actions, subset of state
 * 3. All your actions, no state
 * 4. no actions, (any variants noted above)
 *
 * examples:
 * A.) I want certain reducers from the state tree
 * bindMapComponent(MyComponent)(Actions, ['creativelibrary', 'user', 'audience'])
 *
 * Performance Enhancement
 * B.) I want a subset of a particular state tree, lets say only the creativelibrary sub tree
 * bindMapComponent(MyComponent)(Actions, ['creativelibrary.name', 'creativelibrary.templates'])
 *
 * C.) Do not pass Actions if you do not want them.
 */

export default Component => (Actions = {}, requestState) => connect(({reducer}) => {
	return requestState.length ? { ...deriveRequestState(reducer)(requestState) } : { };
}, dispatch => {
	return { actions: bindActionCreators(Actions, dispatch) };
})(Component);

const deriveRequestState = state => states => {
	return states.reduce((p, c) => _.set(p, c, _.get(state, c, {})), {});
};
