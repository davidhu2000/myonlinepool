import React from 'react';
import { Link } from 'react-router';
import enhanceWithClickOutside from 'react-click-outside';

class Dropdown extends React.Component {
  handleClickOutside(e) {
    this.props.toggleDropdown();
  }

  render() {
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
  }
}

export const AccountDropdown = enhanceWithClickOutside(Dropdown);
