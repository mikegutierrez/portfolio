import React, { Component, PropTypes } from 'react';

class Logo extends Component {
	static get propTypes() {
		return {
			icon: PropTypes.string.isRequired
		};
	}

	static get defaultProps() {
		return {
			icon: ''
		};
	}

	render() {
		return (
			<img
				src={this.props.icon}
				width="72"
				className="margin-bottom-m"
			/>
		);
	}
}

export default Logo;
