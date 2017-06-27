import React from 'react';
import { parseTime } from 'helpers';
// import PropTypes from 'prop-types';

class GameForm extends React.Component {

  render() {
    let routeInfo = this.props.params;
    let game = this.props.games[routeInfo.weekId][routeInfo.gameId];
    return (
      <div className="game-form">
        {game.home_team}
        {game.away_team}
        {game.home_score}
        {game.away_score}
        {game.line}
        {game.spread}
      </div>
    );
  }
}

export default GameForm;
