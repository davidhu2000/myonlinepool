/* global document, $ */
import React from 'react';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';

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

    let message = 'Please check your email to reset your password.';

    let url = {
      pathname: 'auth',
      query: { form: 'message', message }
    };

    $.ajax({
      method: 'POST',
      url: '/api/auth/passwords',
      data: {
        user: { email: this.state.email }
      }
    }).then(
      () => hashHistory.push(url),
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

export { ForgetPassword };
