import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { SigninForm, SignupForm } from './subcomponents';

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
  signup: PropTypes.func.isRequired
};

export default withRouter(AuthForm);
