import React from 'react';
import { Link, withRouter } from 'react-router';

const AccountDropdown = props => {

  return (
    <div className="account-dropdown" id="account-dropdown">
      <div className="account-dropdown-list">
        <Link to={`/signin`}>
          Sign In
        </Link>
        <Link to={`/signup`}>
          Sign Up
        </Link>
        <Link to={`/`}>
          Splash
        </Link>
        <Link to={`/home`}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default AccountDropdown;
