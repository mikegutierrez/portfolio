/**
 * Action Creators
 */

export const TYPES = {
	ADD_ONE: 'ADD_ONE'
};

/**
 * Adds one to state.counter.
 *
 * @return {object}	 - Defines action type for reducer to mutate state.counter.
 */
export function addOne() {
	return { type: TYPES.ADD_ONE };
}
