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
        <Link
          to='#'
          id='right-dropdown-button'
          className="account-button"
        >
          <span>Sign Out</span>
        </Link>
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

  render() {
    console.log(this.props)
    return (
      <div className='navbar-container'>
        { this.state.showLeftDropdown && !this.locationCheck() ? (
          <SignedoutDropdown
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
            <i className="fa fa-bars fa-2x" aria-hidden="true" />
          )}
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
  PoolId: PropTypes.number,
  Location: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  PoolId: null,
  user: {}
};

export default withRouter(Navbar);
