import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { FormGroup } from './subcomponents';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: ""
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

  validateForm(type) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let correctEmail = emailRegex.test(this.state.email);

    if (type === 'signup') {
      let namePresent = this.state.name.length > 0;
      let matchingPassword = this.state.password === this.state.passwordConfirmation;
      return correctEmail && namePresent && matchingPassword;
    } else {
      let passwordPresent = this.state.password.length > 0;
      return correctEmail && passwordPresent;
    }
  }

  submitForm(e) {
    e.preventDefault();

    switch (this.props.location.pathname) {
      case '/signup':
        if (this.validateForm('signup')) {
          this.props.signup(this.state);
          hashHistory.push('/home');
        } else {
          // render errors
        }
        break;
      default:
        if (this.validateForm('signin')) {
          this.props.signin(this.state);
          hashHistory.push('/home');
        } else {
          // render errors
        }
    }

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
            <FormGroup
              update={this.update}
              value={this.state.name}
              type='name'
              label='Full Name'
            />
          ) : null }

          <FormGroup
            update={this.update}
            value={this.state.email}
            type="email"
            label="Email"
          />

          <FormGroup
            update={this.update}
            value={this.state.password}
            type="password"
            label="Password"
          />

          { path === '/signup' ? (
            <FormGroup
              update={this.update}
              value={this.state.password_confirmation}
              type='password'
              field='password_confirmation'
              label='Password Confirmation'
            />
          ) : null }

          <div className="submit-row">
            <div className="reroute">
              {text}
              <span>
                <Link to={otherLink}>{otherForm}</Link>
              </span>
            </div>
            <input type='submit' className="auth-form-button" value={submitValue} />

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
