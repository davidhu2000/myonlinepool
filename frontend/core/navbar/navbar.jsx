import React from 'react';
import { withRouter, Link } from 'react-router';
import AccountDropdown from './account_dropdown';
import SettingsDropdown from './settings_dropdown';
import { toggleCover } from '../../helpers/dropdown.js';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      showSettings: false
    };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
    toggleCover();
  }

  toggleSettings() {
    this.setState({ showSettings: !this.state.showSettings });
    toggleCover();
  }

  render() {
    return (
      <div className='navbar-container'>
        { this.state.showSettings ? <SettingsDropdown
          context={this}
          toggleSettings={this.toggleSettings.bind(this)}
          user={this.props.user}/> : null }
        <button onClick={this.toggleSettings.bind(this)}>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          Info
        </button>
        <h1>My Online Pool</h1>
        <button onClick={this.toggleDropdown.bind(this)}>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          Account
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
