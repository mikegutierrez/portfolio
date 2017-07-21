import React, { Component, PropTypes } from 'react';
import { autoBindMethods } from '../../helpers/autoBindMethods';
import moment from 'moment';
import classnames from 'classnames';

class Footer extends Component {
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
		const currentYear = moment().format('YYYY');
		const footerStyle = classnames('bg-white box-shadow-light', {
			'footer-fixed': this.props.location.pathname === '/contact'
		});
		return (
			<div id="footer" className={footerStyle}>
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
