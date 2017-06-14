import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { SigninForm, SignupForm, ForgetPassword, ConfirmEmail, Message } from './subcomponents';

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
    let { form } = this.props.location.query;

    switch (form) {
      case 'signup':
        return <SignupForm signup={this.props.signup} />;
      case 'forget-password':
        return <ForgetPassword resetPassword={() => console.log('reset password')} />;
      case 'confirm-email':
        let { email, token } = this.props.location.query;
        return <ConfirmEmail email={email} token={token} />;
      case 'message':
        let { message } = this.props.location.query;
        return <Message message={message} />;
      default:
        return <SigninForm signin={this.props.signin} />;
    }
  }

  render() {
    console.log(this.props);
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
  signup: PropTypes.func.isRequired
};

export default withRouter(AuthForm);
