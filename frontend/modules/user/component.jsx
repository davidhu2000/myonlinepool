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

    switch (this.props.location.pathname) {
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
