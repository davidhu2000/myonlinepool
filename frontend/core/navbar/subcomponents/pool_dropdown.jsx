import React from 'react';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import autoBind from 'react-autobind';
import Modal from 'react-modal';
import { Link } from 'react-router';
import { ConfirmForm } from './';

import customStyles from './modal_styles.json';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false
    };
    autoBind(this);
  }

  handleClickOutside(e) {
    if (![e.path[0].id, e.path[1].id].includes('left-dropdown-button')) {
      this.props.toggleLeftDropdown();
    }
  }

  leavePoolButton() {
    this.setState({ showConfirm: true });
    this.props.toggleLeftDropdown();
  }

  render() {
    console.log(this.state)
    return (
      <div className="navbar-dropdown" id="pool-dropdown">
        <div className="navbar-dropdown-list">
          <Link to={`/home`} onClick={this.props.toggleLeftDropdown}>
            Home
          </Link>
          <Link to={`/pool/${this.props.poolId}`} onClick={this.props.toggleLeftDropdown}>
            Pool Homepage {this.props.poolId}
          </Link>
          <Link to={`/pool/${this.props.poolId}/picks`} onClick={this.props.toggleLeftDropdown}>
            Picks
          </Link>
          <Link to={`/pool/${this.props.poolId}/leaderboard`} onClick={this.props.toggleLeftDropdown}>
            Leaderboard
          </Link>
          <div className='remove-button' onClick={this.leavePoolButton}>
            Leave Pool
          </div>
          { this.props.isModerator && (
            <Link to={`/pool/${this.props.poolId}/moderator`} onClick={this.props.toggleLeftDropdown}>
              Moderator
          </Link>
          )}
        </div>
        {/*<Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          contentLabel="label"
          style={customStyles}
        >*/}
        { this.state.showConfirm && (
          <ConfirmForm
            userId={this.props.userId}
            poolId={this.props.poolId}
            removeMember={this.props.removeMember}
          />
        )}
        {/*</Modal>*/}
      </div>
    );
  }
}

Dropdown.propTypes = {
  userId: PropTypes.number.isRequired,
  poolId: PropTypes.number.isRequired,
  isModerator: PropTypes.bool.isRequired,
  toggleLeftDropdown: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired
};

export const PoolDropdown = enhanceWithClickOutside(Dropdown);
