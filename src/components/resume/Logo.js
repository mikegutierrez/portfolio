import React, { Component, PropTypes } from 'react';

class Logo extends Component {
	static get propTypes() {
		return {
			title: PropTypes.string.isRequired
		};
	}

	static get defaultProps() {
		return {
			title: ''
		};
	}

	render() {
		// force lowercase & strip all whitespace
		const icon = this.props.title.toLowerCase().replace(/\s/g, '');
		return (
			<img
				src={`../../images/logo-${icon}.png`}
				width="72"
				className="margin-bottom-m"
			/>
		);
	}
}

export default Logo;
