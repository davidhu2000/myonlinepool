import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from '../../common/components/standings_box';
import PoolList from './subcomponents/pool_list';

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
      ],
      pools: [
        {name: "office"},
        {name: "friends"},
        {name: "enemies"}
      ]
    };
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-left">
          <div className="home-message">
            <h2>Welcome back,</h2>
            <p>Create a pool</p>
            <p>Browse your pools</p>
            <p>Checkout leaderboards</p>
          </div>
          <PoolList
            Title="My Pools"
            Pools={this.state.pools}
            key={Math.random()}
            />
        </div>
        <div className="home-right">
          <StandingsBox
            Title="Weekly"
            Standings={this.state.standings}
            key={Math.random()}
            />
          <StandingsBox
            Title="Season Total"
            Standings={this.state.standings}
            key={Math.random()}
            />
          </div>
      </div>
    );
  }
}

export default withRouter(Home);
