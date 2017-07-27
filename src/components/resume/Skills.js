import React, { Component, PropTypes } from 'react';

class Skills extends Component {
	static get propTypes() {
		return {
			technical: PropTypes.array.isRequired,
			organizational: PropTypes.array.isRequired
		};
	}

	static get defaultProps() {
		return {
			technical: [],
			organizational: []
		};
	}

	formatList(skills) {
		return skills.join(', ').replace(/,(?=[^,]+$)/, ' and');
	}

	render() {
		const { technical, organizational } = this.props;
		const technicalSkills = this.formatList(technical);
		const organizationalSkills = this.formatList(organizational);
		return (
			<div className="row">
				<div className="col-md-12">
					{ technicalSkills }
				</div>
				<div className="col-md-12">
					{ organizationalSkills }
				</div>
			</div>
		);
	}
}

export default Skills;
