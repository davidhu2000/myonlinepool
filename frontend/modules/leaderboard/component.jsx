import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="leaderboard-container">
        <div className="leaderboard-box">
          Leaderboard
        </div>
      </div>
    );
  }
}

export default withRouter(Leaderboard);
