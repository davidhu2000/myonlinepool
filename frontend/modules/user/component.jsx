import React from 'react';
import { withRouter, Link, hashHistory } from 'react-router';
import PropTypes from 'prop-types';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.submitForm = this.submitForm.bind(this);
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
        this.props.signup(this.state);
        break;
      default:
        this.props.signin(this.state);
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let submitValue;
    let otherForm;
    let otherLink;

    switch (this.props.location.pathname) {
      case '/signup':
        submitValue = 'Sign Up';
        otherForm = 'Sign in';
        otherLink = '/signin';
        break;
      default:
        submitValue = 'Sign In';
        otherForm = 'Sign up';
        otherLink = '/signup';
    }

    return (
      <div className="signup-container">
        <form onSubmit={this.submitForm} className="auth-form">
          <input
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.update("email")}
            className="auth-form-name"
          />
          <input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update("password")}
            className="auth-form-password"
          />
          <div className="submit-row">
            <div className="reroute">
              Already have an Account?
              <span>
                <Link to={otherLink}>{otherForm}</Link>
              </span>
            </div>
            <input type='submit' className="auth-form-button" value={submitValue} />
          </div>
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
