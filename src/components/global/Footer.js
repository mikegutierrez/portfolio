import React, { Component } from 'react';
import moment from 'moment';

class Footer extends Component {
	render() {
		const currentYear = moment().format('YYYY');
		return (
			<div id="footer" className="bg-white box-shadow-light">
				<div className="small text-center vertically-center">
					&copy; Copyright { currentYear } Mike Gutierrez. All rights reserved.
					<br/>
					View the code for this website on <a href="https://github.com/mikegutierrez/portfolio" target="_blank">Github</a>.
				</div>
			</div>
		);
	}
}

export default Footer;
