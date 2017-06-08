import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';

import { toggleCover } from 'helpers/dropdown.js';

import { PoolDropdown, SettingsDropdown, AccountDropdown } from './subcomponents';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRightDropdown: false,
      showLeftDropdown: false
    };

    autoBind(this);
  }

  toggleRightDropdown() {
    this.setState({ showLeftDropdown: false, showRightDropdown: !this.state.showRightDropdown });
  }

  toggleLeftDropdown() {
    this.setState({ showRightDropdown: false, showLeftDropdown: !this.state.showLeftDropdown });
  }

  locationCheck() {
    return this.props.Location.includes('pool');
  }

  render() {
    return (
      <div className='navbar-container'>
        { this.state.showLeftDropdown && !this.locationCheck() ? (
          <SettingsDropdown
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        ) : null }

        { this.state.showLeftDropdown && this.locationCheck() ? (
          <PoolDropdown
            PoolId={this.props.PoolId}
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        ) : null }

        <button
          id='left-dropdown-button'
          className="info-button"
          onClick={this.toggleLeftDropdown}
        >
          { this.state.showLeftDropdown ? (
            <i className="fa fa-minus fa-2x" aria-hidden="true" />
          ) : (
            <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
          )}
        </button>

        <div className="title">My Online Pool</div>

        <button
          id='right-dropdown-button'
          className="account-button"
          onClick={this.toggleRightDropdown}
        >
          <span>Sign In</span>
        </button>
      </div>
    );
  }
}

export default Navbar;
