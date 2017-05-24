import React from 'react';
import { withRouter, Link } from 'react-router';

class Moderator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="moderator-container">
        Moderator
      </div>
    );
  }
}

export default withRouter(Moderator);
