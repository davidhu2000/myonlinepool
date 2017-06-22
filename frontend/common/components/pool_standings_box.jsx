import React from 'react';
import { Link, withRouter } from 'react-router';
import { PoolStandingsBoxItem } from './pool_standings_box_item';

class PoolStandingsBox extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }

  genList() {
    let stands = this.props.Standings;
    return stands.map( standing => (
      <PoolStandingsBoxItem
        key={Math.random()}
        Name={standing.name}
        Score={standing.score}
        Losses={standing.losses}
        Pool={standing.pool}
        />
    ));
  }

  render() {
    return (
      <div className="pool-standings-box">
        <div className="pool-standings-box-title">
          <h1>
            {this.props.Title}
          </h1>
        </div>
        <div className="pool-standings-box-top-item">
            <div className="title">Player</div>
            <div className="score">Wins</div>
            <div className="losses">Losses</div>
        </div>
        {this.genList()}
      </div>
    );
  }

}

export { PoolStandingsBox };
