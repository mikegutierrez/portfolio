import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logo extends Component {
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

Logo.propTypes = {
	icon: PropTypes.string.isRequired
};

Logo.defaultProps = {
	icon: ''
};

export default Logo;
