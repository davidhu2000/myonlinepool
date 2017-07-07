/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { ScaleLoader } from 'react-spinners';

import { PasswordInput, PasswordConfirmation } from 'common/components';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirmation: '',
      isValid: false,
      loading: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
    let user = {
      email: this.props.email,
      reset_password_token: this.props.token,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation
    };
    let start = Date.now();
    this.props.resetPassword(user).then(
      () => {},
      () => setTimeout(() => this.setState({ loading: false }), 200 - (Date.now() - start))
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

        <PasswordInput update={this.update} password={this.state.password} />

        <PasswordConfirmation
          update={this.update}
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

          { this.state.loading && (
            <div className='loader'><ScaleLoader height={25} width={2} /></div>
          ) }
        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  resetPassword: PropTypes.func.isRequired
};

export { ResetPassword };
