import React from 'react';
import { parseTime } from 'helpers';
// import PropTypes from 'prop-types';

class GameItem extends React.Component {

  render() {
    let game = this.props.game;
    let timeInfo = parseTime(game.start_time);
    console.log(game);
    return (
      <div className="game-item">
        <div>
          {game.away_team}
          
        </div>
        <div>
          {game.home_team}

        </div> 
        <div>
          {game.spread}

        </div>
        <div>
          {game.line}

        </div>       
      </div>
    );
  }
}

export { GameItem };
