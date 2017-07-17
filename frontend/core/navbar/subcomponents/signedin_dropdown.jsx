import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import enhanceWithClickOutside from 'react-click-outside';

class Dropdown extends React.Component {
  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('left-dropdown-button')) {
      this.props.toggleLeftDropdown();
    }
  }

  render() {
    return (
      <div className="navbar-dropdown" id="settings-dropdown">
        <div className="navbar-dropdown-list">
          <Link to={`/home`} onClick={this.props.toggleLeftDropdown}>
            Dashboard
          </Link>
          <Link to={`/profile`}>
            Profile
          </Link>
          { this.props.user.id === 1 && (
            <Link to={'console'} onClick={this.props.toggleLeftDropdown}>
              Console
            </Link>
          )}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  toggleLeftDropdown: PropTypes.func.isRequired
};

export const SignedinDropdown = enhanceWithClickOutside(Dropdown);
