import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class Errors extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.errors.length !== this.props.errors.length;
  }

  renderError(error) {
    setTimeout(() => this.props.removeError(error), 5000);
    return (
      <div className="error-body" key={Math.random()}>
        { error }
      </div>
    );
  }

  render() {
    return (
      <div className='errors-container'>
        { this.props.errors.map(error => this.renderError(error)) }
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeError: PropTypes.func.isRequired
};
export default Errors;
