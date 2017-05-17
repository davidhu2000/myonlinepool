import React from 'react';
import { withRouter, Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        Home
      </div>
    );
  }
}

export default withRouter(Home);
