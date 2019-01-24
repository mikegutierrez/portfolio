import React, { Component } from 'react';
import { autoBindMethods } from '../helpers/autoBindMethods';
import bindMapComponent from '../helpers/mapStateActionsToProps';
import PropTypes from 'prop-types';
import classnames from 'classnames';

// Global components
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

import * as Actions from '../actions';

class Main extends Component {
  constructor(props) {
    super(props);
    autoBindMethods(this);
  }

  render() {
    const containerStyle = classnames('container', 'margin-top-lg', {
      'contact': this.props.location.pathname === '/contact'
    });
    return (
      <div>
        <Header {...this.props} />
        <div className={containerStyle}>
          {
            React.cloneElement(
              this.props.children,
              { ...this.props }
            )
          }
        </div>
        <Footer {...this.props} />
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.object
};

Main.defaultProps = {
  children: {}
};

export default bindMapComponent(Main)(Actions, ['formSuccess']);
