const EXCLUDE_DEFAULTS = [
	'componentWillReceiveProps',
	'shouldComponentUpdate',
	'componentWillUnmount',
	'componentWillUpdate',
	'componentDidUpdate',
	'componentWillMount',
	'componentDidMount',
	'getChildContext',
	'constructor',
	'render'
];

/**
 * Auto-Binds ES6 classes
 * Prevents the need for repetitive -> method = method.bind(this)
 * @param {Object} _this       The instantiated class (aka "this") passed in from a constructor
 * @param {Array}  exclude     Additional methods to exclude from being autobound
 * @return {void}
 */
export function autoBindMethods(_this, exclude = []) {
	const methods = Object.getOwnPropertyNames(_this.constructor.prototype);

	for (let i = 0; i < methods.length; i++) {
		let methodName = methods[i];
		let type = typeof _this[methodName];

		if (EXCLUDE_DEFAULTS.concat(exclude).indexOf(methodName) < 0 && type === 'function') {
			_this[methodName] = _this[methodName].bind(_this);
		}
	}
}
