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
    return this.props.location.pathname.includes('pool');
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
          to='auth?form=signin'
          id='right-dropdown-button'
          className="account-button"
        >
          <span>Sign In</span>
        </Link>
      );
    }
  }

  renderDropdown() {
    if (!this.props.loggedIn) {
      return (
        <SignedoutDropdown
          toggleLeftDropdown={this.toggleLeftDropdown}
        />
      );
    } else if (this.locationCheck()) {
      return (
        <PoolDropdown
          poolId={this.props.poolId}
          toggleLeftDropdown={this.toggleLeftDropdown}
          isModerator={this.props.isModerator}
        />
      );
    } else {
      return (
        <SignedinDropdown
          toggleLeftDropdown={this.toggleLeftDropdown}
          user={this.props.user}
        />
      );
    }
  }

  render() {
    return (
      <div className='navbar-container'>
        { this.state.showLeftDropdown && this.renderDropdown() }
        <button
          id='left-dropdown-button'
          className={this.state.showLeftDropdown ? 'open' : ''}
          onClick={this.toggleLeftDropdown}
        >
          <span /><span /><span /><span />
        </button>

        <div className="title" onClick={() => this.props.router.push('/')}>
          MyOnlinePool
        </div>

        { this.renderAuthButton() }
      </div>
    );
  }
}

Navbar.propTypes = {
  user: PropTypes.shape(),
  loggedIn: PropTypes.bool.isRequired,
  isModerator: PropTypes.bool.isRequired,
  poolId: PropTypes.string,
  signout: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  poolId: null,
  user: {}
};

export default withRouter(Navbar);
