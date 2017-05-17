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
      </div>
    </div>
  );
};

export default AccountDropdown;
