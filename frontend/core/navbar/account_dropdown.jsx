import React from 'react';
import { Link, withRouter } from 'react-router';

const AccountDropdown = props => {

  return (
    <div className="account-dropdown">
      <div className="account-dropdown-list">
        <a>
          Home
        </a>
        <a>Account</a>
        <a>Affiliate</a>
      </div>
    </div>
  );
};

export default AccountDropdown;
