import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

// Application components
import Logo from './Logo';

class Experience extends Component {
	static get propTypes() {
		return {
			title: PropTypes.string.isRequired,
			company: PropTypes.string.isRequired,
			location: PropTypes.string.isRequired,
			dates: PropTypes.string.isRequired,
			tasks: PropTypes.array.isRequired,
			logo: PropTypes.string,
			classes: PropTypes.array
		};
	}

	static get defaultProps() {
		return {
			title: '',
			company: '',
			location: '',
			dates: '',
			tasks: [],
			logo: '',
			classes: []
		};
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			classes: nextProps.classes || this.props.classes
		});
	}

	mapTasks(tasks) {
		return (
			tasks.map((task, index) => {
				return (
					<li key={index} className="margin-bottom-m source-sans-pro">{ task }</li>
				);
			})
		);
	}

	render() {
		const { title, company, location, dates, tasks, logo, classes } = this.props;
		const taskList = this.mapTasks(tasks);
		const classList = classes.join(' ');
		return (
			<div>
				<div className="row margin-top margin-bottom-m">
					<div className="col-md-1">
						<Logo icon={logo} />
					</div>
					<div className="col-md-11 margin-bottom-m">
						<h5 className="fw-600">{title}</h5>
						<h5 className="fw-400">{company}</h5>
						<h6 className="fw-400">{dates}</h6>
						<h6 className="fw-400">{location}</h6>
					</div>
				</div>
				<div className="row">
					<div className="col-md-1"></div>
					<div className="col-md-11">
						<ul className={classnames('list-unstyled', {
							[classes]: classList
						})}>
							{ taskList }
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Experience;
