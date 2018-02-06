import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Skills extends Component {
  formatList(skills) {
    return skills.join(', ').replace(/,(?=[^,]+$)/, ' and');
  }

  render() {
    const { strong, experienced } = this.props;
    const strongSkills = this.formatList(strong);
    const experiencedSkills = this.formatList(experienced);
    return (
      <div className="row">
        <div className="col-md-12 margin-bottom-m">
          <strong>Strong:</strong> {strongSkills}
        </div>
        <div className="col-md-12">
          <strong>Experienced:</strong> {experiencedSkills}
        </div>
      </div>
    );
  }
}

Skills.propTypes = {
  strong: PropTypes.array.isRequired,
  experienced: PropTypes.array.isRequired
};

Skills.defaultProps = {
  strong: [],
  experienced: []
};

export default Skills;
