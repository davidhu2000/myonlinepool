import React from 'react';
import { withRouter, Link } from 'react-router';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signin-container">
        Sign In
      </div>
    );
  }
}

export default withRouter(SignIn);
