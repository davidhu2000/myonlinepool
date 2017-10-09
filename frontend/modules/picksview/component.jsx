import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router';
import { values } from 'lodash';
import { shortestString } from 'helpers';

import { teamNames } from './teamNames.json';

class Picksview extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  sortPlayer() {
    let sorted = values(this.props.standings[this.props.routeParams.weekId[0]]);
    sorted.sort((obj1, obj2) => {
      return obj2.correctPicks - obj1.correctPicks;
    });
  }

  renderGames() {
    // console.log(this.props.routeParams.weekId);
    let games = this.props.picks[this.props.routeParams.weekId[0]];
    return values(games).map(game => (
      <div className="picks-game">
        { teamNames[game.away] } at { teamNames[game.home] }
      </div>
    ));
  }

  renderNames() {
    return values(this.props.members).map(member => (
      <div className="player-name">
        { shortestString(member.name) }
      </div>
    ));
  }

  renderColumns() {
    // let weeklyGame = this.props.picks[this.props.routeParams.weekId[0]];
    // return values(weeklyGame).map(game => (
    //   game.pick_locked ? <div className="player-picks">
    //     {values(game.picks).map(pick => (
    //       <div className={`gif-${pick.picked} pick-logo`} />
    //     ))}
    //   </div> : <div />
    // ));

    let sorted = values(this.props.standings[this.props.routeParams.weekId[0]]);
    sorted.sort((obj1, obj2) => {
      return obj2.correctPicks - obj1.correctPicks;
    });

    let weeklyGame = this.props.picks[this.props.routeParams.weekId[0]];
    console.log(weeklyGame);
    return values(weeklyGame).map(game => (
      game.pick_locked ? <div className="player-picks">
        {sorted.map(player => (
          <div className={`gif-${game.picks[player.userId].picked} pick-logo`} />
        ))}
      </div> : <div />
    ));
  }

  renderStandings() {
    this.sortPlayer();
    let weeklyStandings = this.props.standings[this.props.routeParams.weekId[0]];
    return values(weeklyStandings).map(playerStandings => (
      <div className="player-standings-item">
        {playerStandings.correctPicks}
      </div>
    ));
  }

  render() {
    return (
      <div className="picks-view">
        <div className="picks-view-header">
          <div className="name-title">
            Player Name
          </div>
          <div className="standings-title">
            Points
          </div>
          {this.renderGames()}
        </div>
        <div className="picks-view-body">
          <div className="name-column">
            {this.renderNames()}
          </div>
          <div className="player-standings">
            {this.renderStandings()}
          </div>
          {this.renderColumns()}
        </div>
        <Link to={`/pool/${this.props.poolId}/picks/${this.props.params.weekId[0]}`}>
          <div className="button back-button">
            Back
          </div>
        </Link>
      </div>
    );
  }
}

Picksview.propTypes = {
  picks: PropTypes.shape().isRequired,
  routeParams: PropTypes.shape().isRequired,
  members: PropTypes.shape().isRequired,
  standings: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  params: PropTypes.shape({
    weekId: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Picksview);
