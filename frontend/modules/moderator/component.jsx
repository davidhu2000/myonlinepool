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

        - create bulletins
        - remove users
      </div>
    );
  }
}

export default withRouter(Moderator);
