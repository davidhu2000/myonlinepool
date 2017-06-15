import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class Errors extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className='errors-container'>
        { this.props.errors }
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeError: PropTypes.func.isRequired
};
export default Errors;
