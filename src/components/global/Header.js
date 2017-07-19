import React, { Component } from 'react';

import profilephoto from '../../assets/images/mike.jpg';

class Header extends Component {
	render() {
		return (
			<div id="header">
				<div className="bg-code background"></div>
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
