import React from 'react';
import { Link, withRouter } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { parseTime } from 'helpers';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  submitPick(pick) {
    let { game, poolId, sendPicks } = this.props;

    if (pick !== game.pick) {
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
              (0-0-0)
            </div>
          </div>
        </label>
        <div className="selection-form-date">{timeInfo.date}</div>
        <div className="selection-form-time">
          <div>
            {timeInfo.time}
          </div>
          <div className='time-props'>
            <div>{timeInfo.ampm}</div>
            <div>{timeInfo.timezone}</div>
          </div>  
        </div>
        <div className="selection-form-line">{game.line}</div>
        <div className="selection-form-over">{game.spread}</div>
        <label className={this.renderHomeClassName()}>
          <div className="selection-form-home-name">
            <div>
              {game.home.toUpperCase()}
            </div>
            <div>
              (0-0-0)
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
