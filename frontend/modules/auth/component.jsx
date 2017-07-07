/* eslint no-fallthrough: 0 */
import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import {
  SigninForm,
  SignupForm,
  ForgetPassword,
  Message,
  ResetPassword
} from './subcomponents';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
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

  renderForm() {
    let { query } = this.props.location;

    switch (query.form) {
      case 'signup':
        return <SignupForm signup={this.props.signup} />;
      case 'forget-password':
        return <ForgetPassword />;
      case 'message':
        return <Message message={query.message} />;
      case 'confirm-email':
        if (query.email && query.token) {
          this.props.confirmEmail(query.email, query.token);
        }
      case 'reset-password':
        if (query.email && query.token) {
          return (
            <ResetPassword
              email={query.email}
              token={query.token}
              resetPassword={this.props.resetPassword}
            />
          );
        }
      default:
        return <SigninForm signin={this.props.signin} />;
    }
  }

  render() {
    return (
      <div className="signup-container">
        { this.renderForm() }
      </div>
    );
  }
}

AuthForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  signin: PropTypes.func.isRequired,
  signup: PropTypes.func.isRequired,
  confirmEmail: PropTypes.func.isRequired,
  resetPassword: PropTypes.func.isRequired
};

export default withRouter(AuthForm);
