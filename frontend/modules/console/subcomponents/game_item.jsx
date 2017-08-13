import React from 'react';
import PropTypes from 'prop-types';
// import { parseTime } from 'helpers';
import { Link } from 'react-router';

class GameItem extends React.Component {

  render() {
    let game = this.props.game;
    // TODO: add gametime info
    // let timeInfo = parseTime(game.start_time);
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
            <div>
              {game.completed ? "Completed" : "Pending"}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

GameItem.propTypes = {
  week: PropTypes.number.isRequired,
  game: PropTypes.shape().isRequired
};

export { GameItem };
