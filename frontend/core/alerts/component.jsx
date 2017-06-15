import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { difference } from 'lodash';
import AlertContainer from 'react-alert';

class Errors extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      offset: 65,
      position: 'top right',
      theme: 'light',
      time: 45000,
      transition: 'scale'
    };

    this.messages = null;
  }

  componentDidMount() {
    if (this.props.errors.length > 0) {
      this.props.errors.forEach(error => this.showAlert(error));
    }
  }

  componentWillReceiveProps(newProps) {
    difference(newProps.errors, this.props.errors).forEach(error => this.showAlert(error));
  }

  showAlert(error) {
    this.messages.show(error, {
      time: 43000,
      type: 'error',
      icon: <i className='fa fa-exclamation-triangle' />,
      onClose: () => this.props.removeError(error)
    });
  }

  render() {
    return (
      <div className='alerts-container'>
        <AlertContainer ref={ac => { this.messages = ac; }} {...this.state} />
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeError: PropTypes.func.isRequired
};

export default Errors;
