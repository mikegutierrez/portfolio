import React, { Component, PropTypes } from 'react';

// Application components
import Logo from './Logo';

class Education extends Component {
	static get propTypes() {
		return {
			school: PropTypes.string.isRequired,
			degrees: PropTypes.string.isRequired,
			years: PropTypes.string.isRequired,
			logo: PropTypes.string
		};
	}

	static get defaultProps() {
		return {
			school: '',
			degrees: '',
			years: '',
			logo: ''
		};
	}

	render() {
		const { school, degrees, years, logo } = this.props;
		return (
			<div className="row">
				<div className="col-md-1">
					<Logo icon={logo} />
				</div>
				<div className="col-md-11">
					<h5 className="fw-600">{school}</h5>
					<h5 className="fw-400">{degrees}</h5>
					<h6>{years}</h6>
				</div>
			</div>
		);
	}
}

export default Education;
