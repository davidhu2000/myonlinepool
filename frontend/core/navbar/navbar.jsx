import React from 'react';
import { withRouter, Link } from 'react-router';
import AccountDropdown from './account_dropdown';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  render() {
    return (
      <div className='navbar-container'>
        <button>
          <i className="fa fa-angle-down" aria-hidden="true"></i>
          Settings
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
