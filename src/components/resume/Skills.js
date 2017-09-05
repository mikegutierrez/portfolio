import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
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

Skills.propTypes = {
	technical: PropTypes.array.isRequired,
	organizational: PropTypes.array.isRequired
};

Skills.defaultProps = {
	technical: [],
	organizational: []
};

export default Skills;
