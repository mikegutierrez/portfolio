import React, { Component } from 'react';
import { autoBindMethods } from '../../helpers/autoBindMethods';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import profilephoto from '../../assets/images/mike.jpg';

class Header extends Component {
	constructor(props) {
		super(props);
		autoBindMethods(this);
	}

	render() {
		const { location } = this.props;
		const headerStyle = classnames('background',
		{ 'bg-code': location.pathname === '/' },
		{ 'bg-sanddollar': location.pathname === '/projects' },
		{ 'bg-mountains': location.pathname === '/contact' });
		return (
			<div id="header">
				<div className={headerStyle}></div>
				<div className="profile">
					<div className="container">
						<div className="row profile-card">
							<div className="profile-photo inline-block">
								<img src={profilephoto} width="250" />
							</div>
							<div className="profile-info inline-block margin-left">
								<h3 className="text-white fw-400">Mike Gutierrez</h3>
								<h4 className="text-white">Front End Software Engineer</h4>
								<div className="underline-s hidden-xs"></div>
								<ul className="text-white list-unstyled small fw-300 hidden-xs">
									<li>View the code for this website on <a href="https://github.com/mikegutierrez/portfolio" target="_blank">Github</a></li>
									<li>Connect on <a href="https://www.linkedin.com/in/mikegutierrez/" target="_blank">LinkedIn</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Header.propTypes = {
	location: PropTypes.object
};

Header.defaultProps = {
	location: {}
};

export default Header;
