import React, { Component } from 'react';
import { autoBindMethods } from '../../helpers/autoBindMethods';
import moment from 'moment';
import PropTypes from 'prop-types';

class Footer extends Component {
	constructor(props) {
		super(props);
		autoBindMethods(this);
	}

	render() {
		const currentYear = moment().format('YYYY');
		return (
			<footer id="footer" className="bg-white box-shadow-light">
				<div className="small text-center vertically-center">
					&copy; Copyright { currentYear } Mike Gutierrez. <span className="mobile-break">All rights reserved.</span>
				<br className="hidden-xs-mobile"/>
					View the code for this website on <a href="https://github.com/mikegutierrez/portfolio" target="_blank">Github</a>.
				</div>
			</footer>
		);
	}
}

Footer.propTypes = {
	location: PropTypes.object
};

Footer.defaultProps = {
	location: {}
};

export default Footer;
