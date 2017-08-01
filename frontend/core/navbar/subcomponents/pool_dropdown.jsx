import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import autoBind from 'react-autobind';
// import Modal from 'react-modal';
import { Link } from 'react-router';
// import { ConfirmForm } from './';
// import customStyles from './modal_styles.json';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('left-dropdown-button')) {
      this.props.toggleLeftDropdown();
    }
  }

  leavePoolButton() {
    this.props.showConfirmFormModal();
    this.props.toggleLeftDropdown();
  }

  render() {
    return (
      <div className="navbar-dropdown" id="pool-dropdown">
        <div className="navbar-dropdown-list">
          <Link to={`/home`} onClick={this.props.toggleLeftDropdown}>
            Dashboard
          </Link>
          <Link to={`/pool/${this.props.poolId}`} onClick={this.props.toggleLeftDropdown}>
            Homepage
          </Link>
          <Link to={`/pool/${this.props.poolId}/picks`} onClick={this.props.toggleLeftDropdown}>
            Picks
          </Link>
          <Link to={`/pool/${this.props.poolId}/leaderboard`} onClick={this.props.toggleLeftDropdown}>
            Leaderboard
          </Link>
          <Link to={`/pool/${this.props.poolId}/metrics`} onClick={this.props.toggleLeftDropdown}>
            Team Stats
          </Link>
          { this.props.isModerator && (
            <Link to={`/pool/${this.props.poolId}/moderator`} onClick={this.props.toggleLeftDropdown}>
              Moderator
          </Link>
          )}
          { this.props.isModerator && (
            <div className='remove-button' onClick={this.leavePoolButton}>
              Delete Pool
            </div>
          )}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  poolId: PropTypes.number.isRequired,
  isModerator: PropTypes.bool.isRequired,
  toggleLeftDropdown: PropTypes.func.isRequired,
  showConfirmFormModal: PropTypes.func.isRequired
};

export const PoolDropdown = enhanceWithClickOutside(Dropdown);
