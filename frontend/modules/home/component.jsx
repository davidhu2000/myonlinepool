import React from 'react';
import { withRouter, Link } from 'react-router';
import StandingsBox from '../../common/components/standings_box';
import PoolList from './subcomponents/pool_list';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-container">
        <PoolList/>
        <StandingsBox/>
      </div>
    );
  }
}

export default withRouter(Home);
