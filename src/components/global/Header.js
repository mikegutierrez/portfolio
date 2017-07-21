import React, { Component, PropTypes } from 'react';
import { autoBindMethods } from '../../helpers/autoBindMethods';
import classnames from 'classnames';

import profilephoto from '../../assets/images/mike.jpg';

class Header extends Component {
	static get propTypes() {
		return {
			location: PropTypes.func
		};
	}

	static get propTypes() {
		return {
			location: () => {}
		};
	}

	constructor(props) {
		super(props);
		autoBindMethods(this);
	}

	render() {
		const headerStyle = classnames('background',
		{ 'bg-code': this.props.location.pathname === '/' },
		{ 'bg-mountains': this.props.location.pathname === '/contact' });
		return (
			<div id="header">
				<div className={headerStyle}></div>
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
