import React, { Component } from 'react';

// Contact components
import Form from './Form';

class ContactLayout extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="column column-12">
						<Form />
					</div>
				</div>
			</div>
		);
	}
}

export default ContactLayout;
