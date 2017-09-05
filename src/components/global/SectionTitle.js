import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class SectionTitle extends Component {
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

SectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
	classes: PropTypes.array
};

SectionTitle.defaultProps = {
	title: '',
	classes: []
};

export default SectionTitle;
