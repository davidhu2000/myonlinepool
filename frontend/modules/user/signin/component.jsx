import React from 'react';
import { withRouter, Link } from 'react-router';

class SignIn extends React.Component {
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
                 value="Sign In"></input>
        </form>
        <div>
          Don't have an Account? <span><Link to={`/signup`}>Sign Up</Link></span>
        </div>
      </div>
    );
  }
}

export default withRouter(SignIn);
