import React, { Component, PropTypes } from 'react';

// Application components
import Logo from './Logo';

class Education extends Component {
	static get propTypes() {
		return {
			school: PropTypes.string.isRequired,
			degrees: PropTypes.string.isRequired,
			years: PropTypes.string.isRequired
		};
	}

	static get defaultProps() {
		return {
			school: '',
			degrees: '',
			years: ''
		};
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-1">
					<Logo title={this.props.school} />
				</div>
				<div className="col-md-11">
					<h5 className="fw-600">{this.props.school}</h5>
					<h5 className="fw-400">{this.props.degrees}</h5>
					<h6>{this.props.years}</h6>
				</div>
			</div>
		);
	}
}

export default Education;
