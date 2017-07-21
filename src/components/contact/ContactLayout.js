import React, { Component } from 'react';

// Contact components
import Form from './Form';

class ContactLayout extends Component {
	render() {
		return (
			<div>
				<div className="row center-content">
					<div className="col-md-5 col-sm-12 col-xs-12  hidden-xs text-center margin-bottom">
						{
							this.props.formSuccess ? '' : 'Hey, thanks for visiting. Tell me about your next project. Be sure to include as many details about the concept and design as possible. The more, the better!'
						}
					</div>
				</div>
				<div className="row center-content">
					<div className="col-md-5 col-sm-12 col-xs-12">
						<Form formSuccess={this.props.actions.formSuccess()}/>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactLayout;
