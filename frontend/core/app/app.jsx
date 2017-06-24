import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import Navbar from 'core/navbar';
import Alerts from 'core/alerts';

import { ConfirmForm } from './subcomponents';

class App extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
    console.log(props);
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
          <Navbar />
          <Alerts />
          <div className="app-container">
            { this.props.children }
          </div>
        </div>

        <ConfirmForm
          userId={this.props.userId}
          poolId={this.props.params.poolId}
          removeMember={this.props.removeMember}
          modalIsOpen={this.props.modals.showConfirmForm}
        />
      </div>
    );
  }
}

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  moderatorId: PropTypes.number,
  userId: PropTypes.number,
  params: PropTypes.shape({
    poolId: PropTypes.string
  }).isRequired,
  removeMember: PropTypes.func.isRequired,
  modals: PropTypes.shape({
    showConfirmForm: PropTypes.bool.isRequired,
    showJoinForm: PropTypes.bool.isRequired
  }).isRequired
};

App.defaultProps = {
  moderatorId: null,
  userId: null
};

export default withRouter(App);
