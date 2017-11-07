import React from 'react';
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
    if (!this.props.paymentMade) {
      this.props.receiveAlerts(['Pool payment pending.'], 404);
    } else if (game.pick_locked) {
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

  renderClassName(type) {
    let className = `selection-form-${type}`;
    let { game } = this.props;
    let other = type === 'home' ? 'away' : 'home';

    if (game.completed) {
      if (game.pick === type || game.pick === '') {
        if (game[`${type}_score`] > game[`${other}_score`]) {
          className += ' correct-pick-button';
        } else {
          className += ' incorrect-pick-button';
        }
      }
    } else if (game.pick === type) {
      className += ' selected-button';
    }
    return className;
  }

  renderScore() {
    let { game } = this.props;
    if (game.completed) {
      return `${game.away_score} - ${game.home_score}`;
    } else {
      return 'Pending';
    }
  }

  render() {
    let { game } = this.props;
    console.log(game);
    let timeInfo = parseTime(game.start_time);
    return (
      <div className="selection-item">
        <label htmlFor={`${game.away}`} className={this.renderClassName('away')}>
          <button id={`${game.away}`} onClick={() => this.submitPick("away")} />
          <div className={`logo-${game.away} pick-button pick-away-button`} />
          <div className="selection-form-away-name">
            <div>
              {game.away.toUpperCase()}
            </div>
            <div>
              {game.away_record}
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
        <div className="selection-form-line">
          {Number(game.line) > 0 ? `+${game.line}` : `${game.line}`}
        </div>
        <div className="selection-form-spread">
          {game.spread}
        </div>
        <div className="selection-form-score">
          {this.renderScore()}
        </div>

        <label htmlFor={`${game.home}`} className={this.renderClassName('home')}>
          <div className="selection-form-home-name">
            <div>
              {game.home.toUpperCase()}
            </div>
            <div>
              {game.home_record}
            </div>
          </div>
          <button id={`${game.home}`} onClick={() => this.submitPick("home")} />
          <div className={`logo-${game.home} pick-button pick-home-button`} />
        </label>
      </div>
    );
  }
}

PickForm.propTypes = {
  game: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  sendPicks: PropTypes.func.isRequired,
  receiveAlerts: PropTypes.func.isRequired,
  paymentMade: PropTypes.bool.isRequired
};

export { PickForm };
