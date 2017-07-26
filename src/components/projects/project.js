import React, { Component } from 'react';

// Global components
import SectionTitle from '../global/SectionTitle';

class Project extends Component {
	render() {
		return (
			<div className="row margin-bottom-lg section">
				<div className="col-md-12">
					<SectionTitle title="Project One" classes={['inline-block', 'margin-0']}/>
				</div>
			</div>
		);
	}
}

export default Project;
