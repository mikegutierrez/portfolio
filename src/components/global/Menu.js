import React, { Component } from 'react';
import { Link } from 'react-router';

class Menu extends Component {
	render() {
		return (
			<div id="menu">
				<ul className="text-center text-uppercase">
					<li><Link to="/">Resume</Link></li>
					<li><Link to="/projects">Projects</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</div>
		);
	}
}

export default Menu;
