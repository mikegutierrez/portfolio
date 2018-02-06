import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Global components
import SectionTitle from '../global/SectionTitle';

class Project extends Component {
  render() {
    const { title, image, url, stack, description, github } = this.props;
    return (
      <div className="margin-bottom project section">
        <div className="title-container">
          <SectionTitle title={title} classes={['inline-block']} />
        </div>
        <img className="project-image margin-bottom-s" src={image} />
        <div className="project-tags">
          {
            stack.map((tech, index) => {
              return <a href={tech.url} target="_blank" key={index}>{tech.name}</a>;
            })
          }
        </div>
        <div className="margin-top">
          <div className="project-description">{description}</div>
        </div>
        <div className="margin-top-m">
          <div>
            <ul className="list-inline">
              {url &&
                <li>
                  <a href={url} target="_blank" className="small margin-right-lg">
                    Visit the project &gt;&gt;
									</a>
                </li>
              }
              {github &&
                <li>
                  <a href={github} target="_blank" className="small">
                    View the code on Github &gt;&gt;
									</a>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string,
  github: PropTypes.string
};

Project.defaultProps = {
  title: '',
  image: '',
  stack: [],
  description: '',
  url: '',
  github: ''
};

export default Project;
