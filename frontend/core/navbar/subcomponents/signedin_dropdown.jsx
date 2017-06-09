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
      <div className="settings-dropdown" id="settings-dropdown">
        <div className="settings-dropdown-list">
          <Link to={`/`}>
            Splash
          </Link>
          <Link to={`/home`}>
            Home
          </Link>
          <Link to={`/pool/1`}>
            Pool Homepage
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
  }
}

Dropdown.propTypes = {
  toggleLeftDropdown: PropTypes.func.isRequired
};

export const SignedinDropdown = enhanceWithClickOutside(Dropdown);
