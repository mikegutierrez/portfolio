import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class SectionTitle extends Component {
	static get propTypes() {
		return {
			title: PropTypes.string.isRequired,
			classes: PropTypes.array
		};
	}

	static get defaultProps() {
		return {
			title: '',
			classes: []
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			classes: nextProps.classes || this.props.classes
		});
	}

	render() {
		const classes = this.props.classes.join(' ');
		return (
			<div className={classnames('margin-bottom', { [classes]: classes })}>
				<h4 className="fw-400 text-uppercase padding-bottom-s">{this.props.title}</h4>
				<div className="underline-s"></div>
			</div>
		);
	}
}

export default SectionTitle;
