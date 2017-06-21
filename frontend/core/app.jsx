import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

// import Footer from './footer';
import Navbar from './navbar';
import Alerts from './alerts';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this._redirect(this.props.loggedIn, this.props.location.pathname);
  }

  componentWillReceiveProps(newProps) {
    let differentLocation = this.props.location.pathname !== newProps.location.pathname;
    let signinChanged = this.props.loggedIn !== newProps.loggedIn;
    
    if (differentLocation || signinChanged) {
      this._redirect(newProps.loggedIn, newProps.location.pathname);
    }
  }

  _redirect(isLoggedIn, currentLocation) {
    if (isLoggedIn && /auth/.test(currentLocation)) {
      this.props.router.replace('/home');
    } else if (!isLoggedIn && !/auth/.test(currentLocation) && currentLocation !== '/') {
      this.props.router.replace('/auth');
    }
  }

  render() {
    return (
      <div className="base-wrapper">
        <div className="base-container">
          <Navbar
            poolId={this.props.params.poolId}
          />

          <Alerts />
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
    poolId: PropTypes.string
  }).isRequired
};

const mapStateToProps = ({ user }) => ({
  loggedIn: Boolean(user)
});

// const mapDispatchToProps = dispatch => ({

// });

export default connect(
  mapStateToProps,
  null
)(withRouter(App));
