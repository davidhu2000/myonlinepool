/* global document, $ */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { EmailInput } from 'common/components';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'me@gmail.com',
      isValid: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();

    $.ajax({
      method: 'POST',
      url: '/api/users/password',
      data: {
        user: { email: this.state.email }
      }
    }).then(
      () => console.log('show check email message'),
      err => console.log(err)
    );
  }

  isFormValid() {
    let inputs = [];

    inputs.push(
      this.state.email,
    );

    let noEmptyFields = inputs.every(val => !!val);
    let noError = document.getElementsByClassName('form-group-error-message').length === 0;
    this.setState({ isValid: noEmptyFields && noError });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="auth-form">
        <EmailInput context={this} email={this.state.email} />

        <input
          id="form-submit-button"
          type='submit'
          className="auth-form-button"
          value={'Reset password'}
          onMouseEnter={this.isFormValid}
          disabled={!this.state.isValid}
        />

      </form>
    );
  }
}

ForgetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired
};

export { ForgetPassword };
