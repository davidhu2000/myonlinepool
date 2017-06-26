import React from 'react';
import { Link, withRouter } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { parseTime, pickable } from 'helpers';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  submitPick(pick) {
    let { game, poolId, sendPicks } = this.props;
    let gameTime = new Date(game.start_time);
    let pickness = pickable(gameTime);
    console.log(pickness);
    if (!pickness) {
      this.props.receiveAlerts(['Game pick locked.'], 422);
    } else if (pick !== game.pick) {
      let submission = [{
        game_id: game.id,
        pool_id: poolId,
        pick,
        week: game.week
      }];
      sendPicks(submission);
    }
  }

  renderAwayClassName() {
    let className = 'selection-form-away';
    let { game } = this.props;
      if (game.pick === 'away' && game.away_score > game.home_score) {
        className += ' correct-pick-button';
      } else if (game.pick === 'away' && game.away_score < game.home_score) {
        className += ' incorrect-pick-button';
      } else {
        if (game.pick === 'away') {
          className += ' selected-button';
        }
      }
    return className;
  }

  renderHomeClassName() {
    let className = 'selection-form-home';
    let { game } = this.props;
      if (game.pick === 'home' && game.away_score > game.home_score) {
        className += ' correct-pick-button';
      } else if (game.pick === 'home' && game.away_score < game.home_score) {
        className += ' incorrect-pick-button';
      } else {
        if (game.pick === 'home') {
          className += ' selected-button';
        }
      }
    return className;
  }

  renderScore() {
    let { game } = this.props;
    if (game.home_score) {
      return `${game.away_score} - ${game.home_score}`;
    } else {
      return 'Pending';
    }
  }

  render() {
    let { game } = this.props;
    let timeInfo = parseTime(game.start_time);
    return (
      <div className="selection-item">
        <label className={this.renderAwayClassName()}>
          <button onClick={() => this.submitPick("away")} />
          <img
            className="pick-button pick-away-button"
            src={`assets/logos/${game.away}.gif`}
            alt={`${game.away} logo`}
          />
          <div className="selection-form-away-name">
            <div>
              {game.away.toUpperCase()}
            </div>
            <div>
              {game.away_wins} - {game.away_losses}
            </div>
          </div>
        </label>
        <div className="selection-form-time">
          <div className="time-row">
            <div>
              {timeInfo.time}
            </div>
            <div className='time-props'>
              <div>{timeInfo.ampm}</div>
              <div>{timeInfo.timezone}</div>
            </div>  
          </div>
          <div className="date-row"> 
            {timeInfo.date}
          </div>  
        </div>
        <div className="selection-form-score">
          {this.renderScore()}
        </div>
        <div className="selection-form-line">
          {game.line}
          {game.spread}
        </div>
        <label className={this.renderHomeClassName()}>
          <div className="selection-form-home-name">
            <div>
              {game.home.toUpperCase()}
            </div>
            <div>
              {game.home_wins} - {game.home_losses}
            </div>
          </div>
          <button onClick={() => this.submitPick("home")} />
          <img
            className='pick-button pick-home-button'
            src={`assets/logos/${game.home}.gif`}
            alt={`${game.home} logo`}
          />
        </label>
      </div>
    );
  }
}

PickForm.propTypes = {
  game: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  sendPicks: PropTypes.func.isRequired
};

export { PickForm };
