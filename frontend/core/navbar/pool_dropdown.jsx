import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolDropdown = props => {

  return (
    <div className="pool-dropdown" id="pool-dropdown">
      <div className="pool-dropdown-list">
        <Link to={`/pool/1`}>
          Pool Homepage {props.PoolId}
        </Link>
        <Link to={`/pool/1/picks`}>
          Picks
        </Link>
        <Link to={`/pool/1/leaderboard`}>
          Leaderboard
        </Link>
        <Link to={`/pool/1/moderator`}>
          Moderator
        </Link>
      </div>
    </div>
  );
};

export default PoolDropdown;
