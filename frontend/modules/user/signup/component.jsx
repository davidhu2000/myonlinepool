import React from 'react';
import { withRouter, Link } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup-container">
        Sign Up
      </div>
    );
  }
}

export default withRouter(SignUp);
