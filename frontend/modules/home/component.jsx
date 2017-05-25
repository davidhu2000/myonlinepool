import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from '../../common/components/standings_box';
import PoolList from './subcomponents/pool_list';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      standings: [{name: "alex", score: 100},{name: "david", score: 1},{name: "raymond", score: 101}]
    };
  }

  render() {
    return (
      <div className="home-container">
        Home
        <PoolList/>
        <StandingsBox
          Standings={this.state.standings}
          key={Math.random()}
          />
      </div>
    );
  }
}

export default withRouter(Home);
