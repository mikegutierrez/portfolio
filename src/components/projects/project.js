import React, { Component } from 'react';

// Global components
import SectionTitle from '../global/SectionTitle';

import placeholder from '../../assets/images/mike.jpg';

class Project extends Component {
	render() {
		return (
			<div className="row margin-bottom-lg project section">
				<div className="col-md-12">
					<SectionTitle title="Project One" classes={['inline-block']}/>
				</div>
				<div className="col-md-4 col-sm-12 margin-bottom">
					<img src={placeholder} width="220"/>
				</div>
				<div className="col-md-8 col-sm-12">
					<div className="tags">
						<a href="#" target="_blank">Node.js</a>
						<a href="#" target="_blank">React</a>
						<a href="#" target="_blank">Redux</a>
						<a href="#" target="_blank">LESS</a>
						<a href="#" target="_blank">Webpack</a>
					</div>
					<div className="row margin-top">
						<div className="col-md-12">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</div>
					</div>
					<div className="row margin-top-m">
						<div className="col-md-12">
							<ul className="list-inline">
								<li>
									<a href="#" target="_blank" className="small margin-right-lg">
										Visit the project &gt;&gt;
									</a>
								</li>
								<li>
									<a href="#" target="_blank" className="small">
										View the code on Github &gt;&gt;
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
