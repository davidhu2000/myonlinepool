import React from 'react';
import { withRouter, Link } from 'react-router';
import AccountDropdown from './account_dropdown';
import SettingsDropdown from './settings_dropdown';
import PoolDropdown from './pool_dropdown';
import { toggleCover } from '../../helpers/dropdown.js';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      showSettings: false
    };

    this.locationCheck = this.locationCheck.bind(this);
  }

  toggleDropdown() {
    if (this.state.showSettings) {
      this.setState({ showSettings: false, showDropdown: !this.state.showDropdown});
    } else {
      this.setState({ showDropdown: !this.state.showDropdown });
    }
  }

  toggleSettings() {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false, showSettings: !this.state.showSettings});
    } else {
      this.setState({ showSettings: !this.state.showSettings});
    }
  }

  locationCheck() {
    if (this.props.Title.includes('pool')) {
      return true;
    } else {
      false;
    }
  }

  render() {
    this.locationCheck();
    return (
      <div className='navbar-container'>
        { this.state.showSettings && !this.locationCheck() ? <SettingsDropdown
          context={this}
          toggleSettings={this.toggleSettings.bind(this)}
          user={this.props.user}/> : null }
        { this.state.showSettings && this.locationCheck() ? <PoolDropdown
          context={this}
          toggleSettings={this.toggleSettings.bind(this)}
          user={this.props.user}/> : null }
        <button className="info-button" onClick={this.toggleSettings.bind(this)}>
            { this.state.showSettings ? <i
              className="fa fa-angle-down"
              aria-hidden="true"/>    : <i
              className="fa fa-angle-right"
              aria-hidden="true"/> }
          { this.locationCheck() ? <span>Pool</span> : <span>Info</span> }
        </button>
        <h1>My Online Pool</h1>
        <button className="account-button" onClick={this.toggleDropdown.bind(this)}>
          { this.state.showDropdown ? <i
            className="fa fa-angle-down"
            aria-hidden="true"/>    : <i
            className="fa fa-angle-right"
            aria-hidden="true"/> }
          <span>Account</span>
        </button>
        { this.state.showDropdown ? <AccountDropdown
          context={this}
          toggleDropdown={this.toggleDropdown.bind(this)}
          user={this.props.user}/> : null }
      </div>
    );
  }
}

export default Navbar;
