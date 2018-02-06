import React, { Component } from 'react';

// Projects components
import Project from './project';
import { projects } from './data/projects';

class ProjectsLayout extends Component {

  renderProjects() {
    return (
      projects.map((project, index) => {
        return (
          <Project
            title={project.title}
            image={project.image}
            url={project.url}
            stack={project.stack}
            description={project.description}
            github={project.github}
            key={index}
          />
        );
      })
    );
  }

  render() {
    const content = projects.length ? this.renderProjects() : '';
    return (
      <div className="row center-content">
        <div id="project-container">
          {content}
        </div>
      </div>
    );
  }
}

export default ProjectsLayout;
