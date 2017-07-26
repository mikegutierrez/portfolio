import React, { Component } from 'react';

// Global components
import SectionTitle from '../global/SectionTitle';

import { projects } from './data/projects';

class Project extends Component {

	renderProjects() {
		return (
			projects.map((project, index) => {
				return (
					<div className="row margin-bottom-lg project section" key={index}>
						<div className="col-md-12">
							<SectionTitle title={project.title} classes={['inline-block']}/>
						</div>
						<div className="col-md-4 col-sm-12 margin-bottom">
							<img src={project.image} width="220"/>
						</div>
						<div className="col-md-8 col-sm-12">
							<div className="tags">
								{
								project.stack.map((tech, index) => {
									return <a href={tech.url} target="_blank" key={index}>{tech.name}</a>;
								})
								}
							</div>
							<div className="row margin-top">
								<div className="col-md-12">{project.description}</div>
							</div>
							<div className="row margin-top-m">
								<div className="col-md-12">
									<ul className="list-inline">
										<li>
											<a href={project.url} target="_blank" className="small margin-right-lg">
												Visit the project &gt;&gt;
											</a>
										</li>
										<li>
											<a href={project.github} target="_blank" className="small">
												View the code on Github &gt;&gt;
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				);
			})
		);
	}
	render() {
		const content = projects.length ? this.renderProjects() : {};
		return <div>{ content }</div>;
	}
}

export default Project;
