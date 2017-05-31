import React from 'react';
import { withRouter, Link } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.submitUser = this.submitUser.bind(this);
  }

  submitUser() {
    e.preventDefault();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div className="signup-container">
        <form onSubmit={ this.submitUSer } className="auth-form">
          <input  name="username"
                  placeholder="Username"
                  value={ this.state.username }
                  onChange={ this.update("username") }
                  className="auth-form-name"></input>
          <input  name="password"
                  placeholder="Password"
                  value={ this.state.password }
                  onChange={ this.update("password") }
                  className="auth-form-input"></input>
          <input type='submit'
                 className="auth-form-button"
                 value="Sign Up"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(SignUp);
