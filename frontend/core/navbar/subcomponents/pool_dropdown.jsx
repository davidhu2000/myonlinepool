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
      <div className="navbar-dropdown" id="pool-dropdown">
        <div className="navbar-dropdown-list">
          <Link to={`/home`}>
            Home
          </Link>
          <Link to={`/pool/1`}>
            Pool Homepage {this.props.PoolId}
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
  PoolId: PropTypes.number.isRequired,
  toggleLeftDropdown: PropTypes.func.isRequired
};

export const PoolDropdown = enhanceWithClickOutside(Dropdown);
