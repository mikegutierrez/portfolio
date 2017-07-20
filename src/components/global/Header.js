import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

import profilephoto from '../../assets/images/mike.jpg';

class Header extends Component {
	static get propTypes() {
		return {
			location: PropTypes.object
		};
	}

	static get propTypes() {
		return {
			location: '/'
		};
	}

	handleBackground() {
		const { pathname } = this.props.location;
		switch (pathname) {
			case '/':
				return 'bg-code';

			case '/contact':
				return 'bg-mountains';

			default:
				return 'bg-code';
		}
	}

	render() {
		return (
			<div id="header">
				<div className={classnames('background ' + this.handleBackground())}></div>
				<div className="profile">
					<div className="container">
						<div className="row profile-card">
							<div className="col-md-12">
								<div className="photo inline-block">
									<img src={profilephoto} width="250" />
								</div>
								<div className="name-title inline-block">
									<h3 className="text-white fw-400">Mike Gutierrez</h3>
									<h4 className="text-white">Front End Software Engineer</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
