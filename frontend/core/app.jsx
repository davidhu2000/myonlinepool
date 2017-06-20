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
    } else if (!isLoggedIn && !/auth/.test(route) && route !== '') {
      this.props.router.replace('/auth');
    }
  }

  render() {
    return (
      <div className="base-wrapper">
        <div className="base-container">
          <Navbar
            location={this.props.location.pathname}
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
