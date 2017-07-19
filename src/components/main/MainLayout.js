import React, { Component, PropTypes } from 'react';

// Global Components
import Counter from '../global/Counter';

// Application Assets
import img from '../../assets/images/mike.jpg';

class MainLayout extends Component {
	static get propTypes() {
		return {
			counter: PropTypes.number,
			actions: PropTypes.object
		};
	}

	static get defaultProps() {
		return {
			counter: 0,
			actions: {}
		};
	}

	render() {
		const { actions, counter } = this.props;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<h1>Main Layout</h1>
					</div>
					<div className="col-md-12">
						<img src={img} width="250" />
					</div>
					<div className="col-md-12">
						<Counter
							counter={counter}
							addOne={actions.addOne}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MainLayout;
