import React, { Component, PropTypes } from 'react';
import { autoBindMethods } from '../helpers/autoBindMethods';
import bindMapComponent from '../helpers/mapStateActionsToProps';

// Global components
import Header from '../components/global/Header';
import Menu from '../components/global/Menu';
import Footer from '../components/global/Footer';

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
				<Header {...this.props}/>
				<div className="container">
					<Menu />
					{
						React.cloneElement(
							this.props.children,
							{ ...this.props }
						)
					}
				</div>
				<Footer {...this.props}/>
			</div>
		);
	}
}

export default bindMapComponent(Main)(Actions, ['formSuccess']);
