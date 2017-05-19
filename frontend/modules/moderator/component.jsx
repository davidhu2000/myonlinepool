import React from 'react';
import { withRouter, Link } from 'react-router';

class Moderator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="picks-container">
      </div>
    );
  }
}

export default withRouter(Moderator);
