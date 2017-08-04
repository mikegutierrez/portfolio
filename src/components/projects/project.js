import React, { Component, PropTypes } from 'react';

// Global components
import SectionTitle from '../global/SectionTitle';

class Project extends Component {
	static get propTypes() {
		return {
			title: PropTypes.string.isRequired,
			images: PropTypes.array.isRequired,
			stack: PropTypes.array.isRequired,
			description: PropTypes.string.isRequired,
			url: PropTypes.string,
			github: PropTypes.string
		};
	}

	static get defaultProps() {
		return {
			title: '',
			images: [],
			stack: [],
			description: '',
			url: '',
			github: ''
		};
	}

	render() {
		const { title, images, url, stack, description, github } = this.props;
		return (
			<div className="row margin-bottom-lg project section">
				<div className="col-md-12">
					<SectionTitle title={title} classes={['inline-block']}/>
				</div>
				<div className="col-md-4 col-sm-12 margin-bottom project-image-wrapper">
					{

						images.map((image, index) => {
							return (
								<div className="project-image margin-bottom-s" key={index}>
									<img src={image} />
									<div className="caption">
										<div className="h6 text-uppercase margin-0">{title}</div>
									</div>
									<a href={url} target="_blank"></a>
								</div>
							);
						})
					}
				</div>
				<div className="col-md-8 col-sm-12">
					<div className="project-tags">
						{
							stack.map((tech, index) => {
								return <a href={tech.url} target="_blank" key={index}>{tech.name}</a>;
							})
						}
					</div>
					<div className="row margin-top">
						<div className="col-md-12 project-description">{description}</div>
					</div>
					<div className="row margin-top-m">
						<div className="col-md-12">
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
			</div>
		);
	}
}

export default Project;
