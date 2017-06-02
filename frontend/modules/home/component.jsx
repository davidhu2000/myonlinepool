import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from '../../common/components/standings_box';
import PoolList from './subcomponents/pool_list';
import { ModBoard } from 'modules/pool/subcomponents';

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
        {id: 1, name: "office"},
        {id: 1, name: "friends"},
        {id: 1, name: "enemies"}
      ],
      bulletins: ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]
    };
  }

  render() {
    return (
      <div className="home-container">
        <div className="home-bulletin">
          <ModBoard
            Chat={this.state.bulletins.slice(0, 5)}
            Mod={this.state.moderator}
          />
        </div>
        <div className="home-top">
          <StandingsBox
            Title="Weekly Leaders"
            Standings={this.state.standings}
            key={Math.random()}
            />
          <StandingsBox
            Title="Season Leaders"
            Standings={this.state.standings}
            key={Math.random()}
            />
        </div>
        <div className="home-bottom">
          <PoolList
            Title="My Pools"
            Pools={this.state.pools}
            key={Math.random()}
            />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
