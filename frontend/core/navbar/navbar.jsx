import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { PoolDropdown, SignedinDropdown, SignedoutDropdown } from './subcomponents';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftDropdown: false,
      showJoinForm: false,
      showConfirmForm: false
    };

    autoBind(this);
  }

  toggleLeftDropdown() {
    this.setState({ showLeftDropdown: !this.state.showLeftDropdown });
  }

  toggle(type) {
    this.setState({ [type]: !this.state[type] });
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
          toggle={this.toggle}
          toggleLeftDropdown={this.toggleLeftDropdown}
        />
      );
    } else if (this.locationCheck()) {
      return (
        <PoolDropdown
          userId={this.props.user.id}
          poolId={this.props.pool.id}
          toggle={this.toggle}
          toggleLeftDropdown={this.toggleLeftDropdown}
          isModerator={this.props.pool.moderatorId === this.props.user.id}
          removeMember={this.props.removeMember}
        />
      );
    } else {
      return (
        <SignedinDropdown
          toggleLeftDropdown={this.toggleLeftDropdown}
          user={this.props.user}
          toggle={this.toggle}
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
  pool: PropTypes.shape(),
  loggedIn: PropTypes.bool.isRequired,
  signout: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  pool: {},
  user: {}
};

export default withRouter(Navbar);
