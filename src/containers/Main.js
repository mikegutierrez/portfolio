import React, { Component, PropTypes } from 'react';
import { autoBindMethods } from '../helpers/autoBindMethods';
import bindMapComponent from '../helpers/mapStateActionsToProps';

import * as Actions from '../actions';

class Main extends Component {
	static get propTypes() {
		return {
			children: PropTypes.object
		};
	}

	static get defaultProps() {
		return {
			children: {}
		};
	}

	constructor(props) {
		super(props);
		autoBindMethods(this);
	}

	render() {
		return (
			<div>
				<div>
					{
					React.cloneElement(
						this.props.children,
						{ ...this.props }
					)
				}
				</div>
			</div>
		);
	}
}

export default bindMapComponent(Main)(Actions, ['counter']);
