import React from 'react';
import PropTypes from 'prop-types';

export function withValidation(Component) {
  class WithValidation extends React.Component {
    constructor(props) {
      super(props);
    }

    validateEmail() {
      let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(this.props.value);
    }

    validatePresence() {
      let { value } = this.props;
      return value && value.length > 0;
    }

    validatePassword() {
      return this.props.value.length > 5;
    }

    validateInteger() {
      let { value } = this.props;
      return !!parseInt(value, 10) && parseInt(value, 10) >= 0;
    }

    validateField() {
      switch (this.props.field) {
        case 'email':
          return this.validateEmail();
        case 'password':
          return this.validatePassword();
        case 'buy_in':
          return this.validateInteger();
        default:
          return this.validatePresence();
      }
    }

    render() {
      return (
        <Component {...this.props} isValid={this.validateField()} />
      );
    }
  }

  WithValidation.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    field: PropTypes.string.isRequired
  };

  return WithValidation;
}
