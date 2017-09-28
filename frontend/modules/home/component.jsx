/* global $ */

import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { ModBoard, StandingsBox } from 'common/components';
import { PoolList, ProfileBox } from './subcomponents';

class Home extends React.Component {

  componentDidMount() {
    let { home } = this.props;
    if (Object.keys(home.myPools).length === 0) {
      this.props.fetchMyPools();
    }
    if (home.announcements.length === 0) {
      this.props.fetchAnnouncements();
    }

    if (home.weeklyStandings.length === 0 || home.seasonStandings.length === 0) {
      this.props.fetchSiteStandings();
    }
  }

  render() {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
    return (
      <div className="home-container">
        <div className="home-top">
          <ProfileBox
            user={this.props.user}
          />
          <PoolList
            pools={this.props.home.myPools}
            toggleJoinFormModal={this.props.toggleJoinFormModal}
          />
        </div>
        <div className="home-bulletin">
          <ModBoard
            title='Announcements'
            announcements={this.props.home.announcements}
          />
        </div>
        <div className="home-bottom">
          <StandingsBox
            title={`Week ${this.props.prefs.week} Leaders`}
            standings={this.props.home.weeklyStandings}
          />
          <StandingsBox
            title="Season Leaders"
            standings={this.props.home.seasonStandings}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchMyPools: PropTypes.func.isRequired,
  fetchAnnouncements: PropTypes.func.isRequired,
  toggleJoinFormModal: PropTypes.func.isRequired,
  fetchSiteStandings: PropTypes.func.isRequired,
  home: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
  prefs: PropTypes.shape().isRequired
};

export default withRouter(Home);
