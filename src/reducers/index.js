import { TYPES as actionTypes } from '../actions';

const TYPES = { ...actionTypes };

const initialState = {
	counter: 0,
	formSuccess: false
};

/**
 * Application reducer for normalizing redux state.
 *
 * @param {object} state 	current application state.
 * @param {object} action	an action payload.
 * @return {object} 		new application state.
 */
function reducer(state = initialState, action) {
	switch (action.type) {
		case TYPES.ADD_ONE:
			return { ...state, counter: state.counter + 1 };

		case TYPES.SET_FORM_SUCCESS:
			return { ...state, formSuccess: true };

		default:
			return state;
	}
}

export default reducer;
