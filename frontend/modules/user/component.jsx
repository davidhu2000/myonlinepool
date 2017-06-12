/* global document */
import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values } from 'lodash';

import { FormTextInput } from 'common/components';

class AuthForm extends React.Component {
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

  componentDidMount() {
    this._redirectIfLoggedIn();
  }

  _redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.replace('/home');
    }
  }

  submitForm(e) {
    e.preventDefault();

    switch (this.props.location.pathname) {
      case '/signup':
        this.props.signup(this.state).then(
          () => console.log('show confirm with email message'),
          err => console.log(err)
        );

        break;
      default:
        this.props.signin(this.state).then(
          () => hashHistory.push('/home'),
          err => console.log(err)
        );
    }
  }

  isFormValid() {
    let inputs = [];

    if (this.props.location.pathname === '/signin') {
      inputs.push(this.state.email, this.state.password);
    } else {
      inputs.push(
        this.state.name,
        this.state.email,
        this.state.password,
        this.state.passwordConfirmation
      );
    }

    let noEmptyFields = inputs.every(val => !!val);
    let noError = document.getElementsByClassName('form-group-error-message').length === 0;
    this.setState({ isValid: noEmptyFields && noError });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderUtility() {
    if (this.props.location.pathname === '/signin') {
      return (
        <div className="utility-row">
          <div>
            Forgot your password?
          </div>
          <div className="utility-item">
            Remember me?
          </div>
        </div>
      );
    }
  }

  render() {
    let submitValue;
    let otherForm;
    let otherLink;
    let text;
    let path = this.props.location.pathname;

    switch (path) {
      case '/signup':
        submitValue = 'Sign Up';
        otherForm = 'Sign in';
        otherLink = '/signin';
        text = 'Already have an account?';
        break;
      default:
        submitValue = 'Sign In';
        otherForm = 'Sign up';
        otherLink = '/signup';
        text = 'Don\'t have an account?';
    }

    return (
      <div className="signup-container">
        <form onSubmit={this.submitForm} className="auth-form">

          { path === '/signup' ? (
            <FormTextInput
              update={this.update}
              value={this.state.name}
              type='name'
              field="name"
              label='Full Name'
              errorMessage="Please enter your name"
            />
          ) : null }

          <FormTextInput
            update={this.update}
            value={this.state.email}
            type="text"
            field="email"
            label="Email"
            errorMessage="Please enter a valid email"
          />

          <FormTextInput
            update={this.update}
            value={this.state.password}
            type="password"
            field="password"
            label="Password"
            errorMessage="Password needs to be at least 6 characters"
          />

          { path === '/signup' ? (
            <FormTextInput
              update={this.update}
              value={this.state.passwordConfirmation}
              type='password'
              field='passwordConfirmation'
              label='Password Confirmation'
              password={this.state.password}
              errorMessage="Password confirmation does not match password."
            />
          ) : null }

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
          { this.renderUtility() }
        </form>

      </div>
    );
  }
}

AuthForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired
};

export default withRouter(AuthForm);
