import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import Footer from './footer';
import Navbar from './navbar';
import Errors from './errors';

class App extends React.Component {
  componentDidMount() {
    this._redirect(this.props.loggedIn);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.loggedIn !== newProps.loggedIn) {
      this._redirect(newProps.loggedIn);
    }
  }

  _redirect(isLoggedIn) {
    let route = this.props.location.pathname.slice(1);

    if (isLoggedIn && /auth/.test(route)) {
      this.props.router.replace('/home');
    } else if (!isLoggedIn && !/auth/.test(route)) {
      this.props.router.replace('/auth');
    }
  }

  render() {
    return (
      <div className="base-wrapper">
        <div className="base-container">
          <Navbar
            Location={this.props.location.pathname}
            PoolId={this.props.params.poolId}
          />
          <Errors />
          <div className="app-container">
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.poolId
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.user)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
