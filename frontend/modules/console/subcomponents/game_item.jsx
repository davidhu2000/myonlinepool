import React from 'react';
import { parseTime } from 'helpers';
import { Link } from 'react-router';

class GameItem extends React.Component {

  render() {
    let game = this.props.game;
    let timeInfo = parseTime(game.start_time);
    return (
     <div>
        <Link to={`/console/create/${this.props.week}/${game.id}`}>
          <div className="game-item">
            <div>
              {game.away_team}
            </div>
            <div>
              {game.away_score}
            </div>
            <div>
              {game.home_team}
            </div>
            <div>
              {game.home_score}
            </div>
            <div>
              {game.line}
            </div>
            <div>
              {game.spread}
            </div>
          </div>  
        </Link>
      </div>
    );
  }
}

export { GameItem };
