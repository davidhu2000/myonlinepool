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

  render() {
    let { game } = this.props;
    let timeInfo = parseTime(game.start_time)
    return (
      <div className="selection-item">
        <label className={`selection-form-away ${game.pick === 'away' ? 'selected-button' : ''}`}>
          <button onClick={() => this.submitPick("away")} />
          <img
            className="pick-button pick-away-button"
            src={`assets/logos/${game.away}.gif`}
            alt={`${game.away} logo`}
          />
          <div className="selection-form-away-name">
            {game.away}
          </div>
        </label>
        <div className="selection-form-date">{timeInfo.date}</div>
        <div className="selection-form-time">{timeInfo.time}</div>
        <div className="selection-form-line">{game.line}</div>
        <div className="selection-form-over">{game.spread}</div>

        <label className={`selection-form-home ${game.pick === 'home' ? 'selected-button' : ''}`}>
          <div className="selection-form-home-name">{game.home}</div>
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
