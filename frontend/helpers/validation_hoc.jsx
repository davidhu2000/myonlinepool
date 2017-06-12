import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

export function withValidation(Component) {
  class WithValidation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isValid: null
      };

      autoBind(this);
    }

    validateEmail() {
      let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.setState({ isValid: emailRegex.test(this.props.value) });
    }

    validatePresence() {
      let { value } = this.props;
      this.setState({ isValid: value.length > 0 });
    }

    validatePassword() {
      this.setState({ isValid: this.props.value.length > 5 });
    }

    validatePasswordConfirmation() {
      let { password, value } = this.props;
      this.setState({ isValid: password === value });
    }

    validateInteger() {
      let { value } = this.props;
      this.setState({ isValid: !!parseInt(value, 10) && parseInt(value, 10) >= 0 });
    }

    validateField() {
      switch (this.props.field) {
        case 'email':
          return this.validateEmail;
        case 'password':
          return this.validatePassword;
        case 'passwordConfirmation':
        case 'password_confirmation':
          return this.validatePasswordConfirmation;
        case 'buy_in':
          return this.validateInteger;
        default:
          return this.validatePresence;
      }
    }

    render() {
      return (
        <Component {...this.props} isValid={this.state.isValid} validate={this.validateField()} />
      );
    }
  }

  WithValidation.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    field: PropTypes.string.isRequired,
    password: PropTypes.string
  };

  WithValidation.defaultProps = {
    password: ''
  };

  return WithValidation;
}
