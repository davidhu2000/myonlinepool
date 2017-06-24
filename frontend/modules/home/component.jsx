import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { values } from 'lodash';

import { ModBoard, StandingsBox } from 'common/components';
import { PoolList } from './subcomponents';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standings: [
        {name: "alex", score: 100, losses: 1, pool: "office pool 1"},
        {name: "david", score: 1, losses: 100, pool: "family pool 2"},
        {name: "raymond", score: 101, losses: 0, pool: "random pool 1"},
        {name: "ditka", score: 23, losses: 2, pool: "office pool 2"},
        {name: "brady", score: 54, losses: 28, pool: "random pool 1"},
        {name: "manning", score: 89, losses: 3, pool: "office pool 1"},
        {name: "cinco", score: 2, losses: 88, pool: "family pool 1"},
        {name: "clowney", score: 103, losses: 3, pool: "family pool 3"},
        {name: "watt", score: 77, losses: 5, pool: "random pool 2"},
        {name: "sanders", score: 44, losses: 3, pool: "random pool 1"}
      ]
    };
  }

  componentDidMount() {
    this.props.fetchMyPools();
    this.props.fetchAnnouncements();
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-top">
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
            Title="Weekly Leaders"
            Standings={this.state.standings}
          />
          <StandingsBox
            Title="Season Leaders"
            Standings={this.state.standings}
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchMyPools: PropTypes.func.isRequired,
  fetchAnnouncements: PropTypes.func.isRequired,
  home: PropTypes.shape().isRequired,
  toggleJoinFormModal: PropTypes.func.isRequired
};

export default withRouter(Home);
