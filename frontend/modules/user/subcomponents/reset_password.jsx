/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';

import { PasswordInput, PasswordConfirmation } from 'common/components';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirmation: '',
      isValid: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let message = 'Password successfully reset. Please sign in now.';

    let url = {
      pathname: 'auth',
      query: { form: 'message', message }
    };

    $.ajax({
      method: 'POST',
      url: '/api/auth/passwords/reset',
      data: {
        user: {
          email: this.props.email,
          reset_password_token: this.props.token,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
      }
    }).then(
      () => hashHistory.push(url),
      err => console.log(err)
    );
  }

  isFormValid() {
    let inputs = [];

    inputs.push(
      this.state.password,
      this.state.passwordConfirmation
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

        <PasswordInput context={this} password={this.state.password} />

        <PasswordConfirmation
          context={this}
          password={this.state.password}
          passwordConfirmation={this.state.passwordConfirmation}
        />

        <div className="submit-row">
          <input
            id="form-submit-button"
            type='submit'
            className="auth-form-button"
            value={'Reset Password'}
            onMouseEnter={this.isFormValid}
            disabled={!this.state.isValid}
          />
        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
};

export { ResetPassword };
