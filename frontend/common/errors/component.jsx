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
      <div>
        Content
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.shape({
    numberOfErrors: PropTypes.number.isRequired,
    messages: PropTypes.shape({
      [PropTypes.number]: PropTypes.string
    })
  }).isRequired,
  removeError: PropTypes.func.isRequired
};
export default Errors;
