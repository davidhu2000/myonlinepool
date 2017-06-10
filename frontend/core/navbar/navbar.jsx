import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { PoolDropdown, SignedinDropdown, SignedoutDropdown } from './subcomponents';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftDropdown: false
    };

    autoBind(this);
  }

  toggleLeftDropdown() {
    this.setState({ showLeftDropdown: !this.state.showLeftDropdown });
  }

  locationCheck() {
    return this.props.Location.includes('pool');
  }

  renderAuthButton() {
    if (this.props.loggedIn) {
      return (
        <button
          onClick={this.props.signout}
          id='right-dropdown-button'
          className="account-button"
        >
          <span>Sign Out</span>
        </button>
      );
    } else {
      return (
        <Link
          to='signin'
          id='right-dropdown-button'
          className="account-button"
        >
          <span>Sign In</span>
        </Link>
      );
    }
  }

  renderDropdown() {
    if (this.state.showLeftDropdown) {
      if (this.locationCheck()) {
        return (
          <PoolDropdown
            PoolId={this.props.PoolId}
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        );
      } else if (this.props.loggedIn) {
        return (
          <SignedinDropdown
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        );
      } else {
        return (
          <SignedoutDropdown
            toggleLeftDropdown={this.toggleLeftDropdown}
            user={this.props.user}
          />
        );
      }
    }
  }

  render() {
    return (
      <div className='navbar-container'>
        { this.renderDropdown() }
        
        <button
          id='left-dropdown-button'
          className={`${this.state.showLeftDropdown ? 'open' : ''}`}
          onClick={this.toggleLeftDropdown}
        >
          <span />
          <span />
          <span />
          <span />
        </button>

        <div className="title">MyOnlinePool</div>

        { this.renderAuthButton() }
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.shape(),
  loggedIn: PropTypes.bool.isRequired,
  PoolId: PropTypes.string,
  Location: PropTypes.string.isRequired,
  signout: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  PoolId: null,
  user: {}
};

export default withRouter(Navbar);
