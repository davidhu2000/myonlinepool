/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hashHistory, Link } from 'react-router';
import { ScaleLoader } from 'react-spinners';

import { FormTextInput, EmailInput, PasswordInput, PasswordConfirmation } from 'common/components';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      isValid: false,
      loading: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
    let message = 'Please check your email to activate your account.';

    let url = {
      pathname: 'auth',
      query: { form: 'message', message }
    };
    let start = Date.now();
    this.props.signup(this.state).then(
      () => hashHistory.push(url),
      () => setTimeout(() => this.setState({ loading: false }), 200 - (Date.now() - start))
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
    let otherLink = 'signin';
    let text = 'Already have an account?';

    return (
      <form onSubmit={this.submitForm} className="auth-form">

        <FormTextInput
          update={this.update}
          value={this.state.name}
          type='name'
          field="name"
          label='Full Name'
          errorMessage="Please enter your name"
        />

        <EmailInput update={this.update} email={this.state.email} />

        <PasswordInput update={this.update} password={this.state.password} />

        <PasswordConfirmation
          update={this.update}
          password={this.state.password}
          passwordConfirmation={this.state.passwordConfirmation}
        />

        <div className="submit-row">
          <div className="reroute">
            {text}
            <span>
              <Link to={`auth?form=${otherLink}`}>{otherForm}</Link>
            </span>
          </div>

          {/* <input
            id="form-submit-button"
            type='submit'
            className="button auth-form-button"
            value={submitValue}
            onMouseEnter={this.isFormValid}
            disabled={!this.state.isValid}
          /> */}
          <button
            id="form-submit-button"
            type="submit"
          >
            <div className="button auth-form-button">
              {submitValue}
            </div>
          </button>

          { this.state.loading && (
            <div className='loader'><ScaleLoader height={25} width={2} /></div>
          ) }

        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  signup: PropTypes.func.isRequired
};

export { SignupForm };
