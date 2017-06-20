import React from 'react';
import { Link, withRouter } from 'react-router';
import { StandingsBoxItem } from './standings_box_item';

class StandingsBox extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }

  genList() {
    let stands = this.props.Standings;
    return stands.map( standing => (
      <StandingsBoxItem
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
      <div className="standings-box">
        <div className="standings-box-title">
          <h1>
            {this.props.Title}
          </h1>
        </div>
        <div className="standings-box-top-item">
            <div className="title">Player</div>
            <div className="score">Wins</div>
            <div className="losses">Losses</div>
            <div className="pool">Pool</div>
        </div>
        {this.genList()}
      </div>
    );
  }

}

export { StandingsBox };
