/* global document */
import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { FormTextInput, EmailInput, PasswordInput } from 'common/components';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "me@gmail.com",
      password: "password",
      passwordConfirmation: "password",
      isValid: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();

    this.props.signup(this.state).then(
      () => console.log('show confirm with email message'),
      err => console.log(err)
    );
  }

  isFormValid() {
    let inputs = [];

    inputs.push(
      this.state.name,
      this.state.email,
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
    let submitValue = 'Sign Up';
    let otherForm = 'Sign in';
    let otherLink = '/signin';
    let text = 'Already have an account?';

    return (
      <div className="signup-container">
        <form onSubmit={this.submitForm} className="auth-form">

          <FormTextInput
            update={this.update}
            value={this.state.name}
            type='name'
            field="name"
            label='Full Name'
            errorMessage="Please enter your name"
          />


          <EmailInput context={this} email={this.state.email} />

          <PasswordInput context={this} password={this.state.password} />

          <FormTextInput
            update={this.update}
            value={this.state.passwordConfirmation}
            type='password'
            field='passwordConfirmation'
            label='Password Confirmation'
            password={this.state.password}
            errorMessage="Password confirmation does not match password."
          />


          <div className="submit-row">
            <div className="reroute">
              {text}
              <span>
                <Link to={otherLink}>{otherForm}</Link>
              </span>
            </div>

            <input
              id="form-submit-button"
              type='submit'
              className="auth-form-button"
              value={submitValue}
              onMouseEnter={this.isFormValid}
              disabled={!this.state.isValid}
            />

          </div>
        </form>

      </div>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired
};

export default SignupForm;
