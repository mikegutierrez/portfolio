import React, { Component, PropTypes } from 'react';
import { autoBindMethods } from '../../helpers/autoBindMethods';
import classnames from 'classnames';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changed: false,
			loading: false,
			errors: {},
			name: '',
			email: '',
			message: ''
		};
		autoBindMethods(this);
	}

	/**
	 * Generates onChange callbacks for a field.
	 *
	 * @param {string} field  the name of the prop to store the value as.
	 * @return {function}	  a callback function that sets the state and runs validations.
	 */
	onInputChange(field) {
		let value = this.refs[field].value;
		return (
			this.setState({ [field]: value, changed: true }, this.validate)
		);
	}

	validate() {
		const errors = {};

		if (!this.state.name) {
			errors.name = 'Name cannot be blank';
		}

		if (!this.state.email) {
			errors.email = 'Email cannot be blank';
		}

		if (!this.state.message) {
			errors.message = 'Message cannot be blank';
		}

		this.setState({ errors });
	}

	/**
	 * Returns true if the form has errors, is loading,
	 * or has not been changed.
	 *
	 * @return {boolean} true if the form is disabled
	 */
	isDisabled() {
		return (
			Boolean(!this.state.changed || this.state.loading || Object.keys(this.state.errors).length)
		);
	}

	onKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();

			if (!this.isDisabled()) {
				this.onSubmit();
			}
		}
	}

	onSubmit() {
		this.setState({ loading: true }, () => {
			const params = {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message
			};

			console.log('onSubmit: ', params);
			// This is where an object of info will be sent to the server
		});
	}

	render() {
		const { errors } = this.state;
		return (
			<form onSubmit={this.onSubmit} onKeyPress={this.onKeyPress}>
				<div className={classnames('form-group ' + (errors.name ? 'has-error' : ''))}>
					<label className="control-label" htmlFor="input-name">Name</label>
					<input
						ref="name"
						id="input-name"
						className="form-control"
						type="text"
						placeholder="Name"
						onChange={() => this.onInputChange('name')}
					></input>
					<span className={classnames('help-block ' + (errors.name ? 'show' : 'hide'))}>
						{errors.name}
					</span>
				</div>
				<div className={classnames('form-group ' + (errors.email ? 'has-error' : ''))}>
					<label className="control-label" htmlFor="input-email">Email Address</label>
					<input
						ref="email"
						id="input-email"
						className="form-control"
						type="email"
						placeholder="Email"
						onChange={() => this.onInputChange('email')}
					></input>
					<span className={classnames('help-block ' + (errors.email ? 'show' : 'hide'))}>
						{errors.email}
					</span>
				</div>
				<div className={classnames('form-group ' + (errors.message ? 'has-error' : ''))}>
					<label className="control-label" htmlFor="input-message">Message</label>
					<textarea
						ref="message"
						id="input-message"
						className="form-control"
						rows="3"
						onChange={() => this.onInputChange('message')}
					></textarea>
					<span className={classnames('help-block ' + (errors.message ? 'show' : 'hide'))}>
						{errors.message}
					</span>
				</div>
				<div className="form-group">
					<button
						className="btn btn-primary"
						type="button"
						onClick={this.onSubmit}
						disabled={this.isDisabled()}
					>
						Submit
					</button>
				</div>
			</form>
		);
	}
}

export default Form;
