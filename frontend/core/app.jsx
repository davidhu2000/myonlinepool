import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link, hashHistory } from 'react-router';
import PropTypes from 'prop-types';

import Footer from './footer';
import Navbar from './navbar';

class App extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this._redirect(this.props.loggedIn);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.loggedIn !== newProps.loggedIn) {
      this._redirect(newProps.loggedIn);
    }
  }

  _redirect(isLoggedIn) {
    console.log('REDIRECT')
    let route = this.props.location.pathname.slice(1);
    console.log(route)
    console.log(isLoggedIn)

    // routes that does not require signing in first
    if (isLoggedIn && ['signin', 'signup'].includes(route)) {
      console.log('replace to home')
      this.props.router.replace('/home');
    } else if (!isLoggedIn) {
      console.log('replace to signin')
      this.props.router.replace('/signin');
    }

    // console.log('1')
    // if (!isLoggedIn) {
    //   console.log('replace to signin')
      
    //   return;
    // }

    // console.log('2')
    // console.log(['signin', 'signup'].includes(route))
    // if (isLoggedIn && ['signin', 'signup'].includes(route)) {
    //   console.log('replace to home')
      
    // }
  }

  render() {
    console.log(this.props)
    return (
      <div className="base-wrapper">
        <div className="base-container">
          <Navbar
            Location={this.props.location.pathname}
            PoolId={this.props.params.poolId}
          />
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
