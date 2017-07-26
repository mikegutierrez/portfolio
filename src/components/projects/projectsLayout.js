import React, { Component } from 'react';

// Projects components
import Project from './project';

class ProjectsLayout extends Component {
	render() {
		return (
			<div className="row center-content">
				<div className="col-md-8 col-sm-12 col-xs-12">
					<Project />
				</div>
			</div>
		);
	}
}

export default ProjectsLayout;
