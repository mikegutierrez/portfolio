// import fetch from 'node-fetch';
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

// export function postForm() {
// 	console.log('postForm');
// 	return () => {
// 		// request
// 		// 	.post('/contactmike')
// 		// 	.end((error, response) => {
// 		// 		if (error) {
// 		// 			console.error(error);
// 		// 			return;
// 		// 		} else {
// 		// 			console.log('SUCCESS');
// 		// 		}
// 		// 	});
// 		// fetch('/contactmike', { method: 'POST', body: 'test' })
// 		// 	.then(req => req.json())
// 		// 	.then(json => console.log(json));
// 	};
// }
