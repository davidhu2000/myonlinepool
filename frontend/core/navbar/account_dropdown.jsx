import React from 'react';
import { Link, withRouter } from 'react-router';

const AccountDropdown = props => {

  return (
    <div className="account-dropdown" id="account-dropdown">
      <div className="account-dropdown-list">
        <a>
          Sign In
        </a>
        <a>
          Sign Up
        </a>
        <a>
          Support
        </a>
        <Link to={`/home`}>
          Home
        </Link>
        <Link to={`/pool/1`}>
          Pool
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

export default AccountDropdown;
