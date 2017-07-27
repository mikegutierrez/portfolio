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
		const { title, classes } = this.props;
		const classList = classes.join(' ');
		return (
			<div className={classnames('margin-bottom', { [classes]: classList })}>
				<div className="h4 fw-400 text-uppercase padding-bottom-s margin-top-0 margin-bottom-0">
					{title}
				</div>
				<div className="underline-s"></div>
			</div>
		);
	}
}

export default SectionTitle;
