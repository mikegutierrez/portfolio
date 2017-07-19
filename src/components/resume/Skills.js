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
		const technical = this.formatList(this.props.technical);
		const organizational = this.formatList(this.props.organizational);
		return (
			<div className="row">
				<div className="col-md-12">
					{ technical }
				</div>
				<div className="col-md-12">
					{ organizational }
				</div>
			</div>
		);
	}
}

export default Skills;
