import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';

import { toggleCover } from 'helpers/dropdown.js';

import { PoolDropdown, SettingsDropdown, AccountDropdown, DropdownHOC } from './subcomponents';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showRightDropdown: false,
      showLeftDropdown: false,
      dropdown: null
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
            context={this}
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        ) : null }

        { this.state.showLeftDropdown && this.locationCheck() ? <PoolDropdown
          PoolId={this.props.PoolId}
          context={this}
          toggleLeftDropdown={this.toggleLeftDropdown}
          user={this.props.user}/> : null }

        <button className="info-button" onClick={this.toggleLeftDropdown}>
          { this.state.showLeftDropdown ? <i
            className="fa fa-angle-down"
            aria-hidden="true" />    : <i
            className="fa fa-angle-right"
            aria-hidden="true"/> }
          { this.locationCheck() ? <span>Pool</span>
            : <span>Info</span> }
        </button>
        <h1>My Online Pool</h1>
        <button className="account-button" onClick={this.toggleRightDropdown}>
          { this.state.showRightDropdown ? (
            <i className="fa fa-angle-down" aria-hidden="true" />
          ) : (
            <i className="fa fa-angle-right" aria-hidden="true" />
          )}
          <span>Account</span>
        </button>
        { this.state.showRightDropdown ? <AccountDropdown
          context={this}
          toggleRightDropdown={this.toggleRightDropdown}
          user={this.props.user} /> : null }
      </div>
    );
  }
}

export default Navbar;
