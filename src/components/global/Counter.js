import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	static get propTypes() {
		return {
			counter: PropTypes.number.isRequired,
			addOne: PropTypes.func.isRequired
		};
	}

	static get defaultProps() {
		return {
			counter: 0,
			addOne: () => {}
		};
	}
	render() {
		return (
			<div>
				<h2>Counter: {this.props.counter}</h2>
				<button onClick={() => this.props.addOne()}>Add One</button>
			</div>
		);
	}
}

export default Counter;
