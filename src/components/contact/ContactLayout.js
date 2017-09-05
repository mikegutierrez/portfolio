import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Contact components
import Form from './Form';

class ContactLayout extends Component {
	render() {
		const { formSuccess, actions } = this.props;
		const copy = 'Hey, thanks for visiting. I\'m currently looking for full time work as a front end engineer. Tell me all about your team and any available positions. Be sure to include as many details as possible. The more, the better!';
		return (
			<div>
				<div className="row center-content">
					<div className="col-md-5 col-sm-12 col-xs-12  hidden-xs text-center margin-bottom">
						{!formSuccess &&
							<div>{copy}</div>
						}
					</div>
				</div>
				<div className="row center-content">
					<div className="col-md-5 col-sm-12 col-xs-12">
						<Form formSuccess={actions.formSuccess}/>
					</div>
				</div>
			</div>
		);
	}
}

ContactLayout.propTypes = {
	formSuccess: PropTypes.bool.isRequired,
	actions: PropTypes.object.isRequired
};

ContactLayout.defaultProps = {
	formSuccess: false,
	actions: {}
};

export default ContactLayout;
