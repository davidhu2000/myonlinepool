import React from 'react';
import { Link, withRouter } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "1/2/3",
      time: "2:00 PM",
      line: "-200",
      over_under: "11"
    };
    autoBind(this);
  }

  componentDidMount() {
    // if (this.props.game.pick !== "") {
    //   let chosen = document.getElementById(this.props.game[this.props.game.pick]);
    //   chosen.classList.remove('pick-button');
    //   chosen.classList.add('selected-button');
    // }
  }

  submitPick(pick) {
    let submission = [{
      game_id: this.props.game.id,
      pool_id: this.props.poolId,
      pick
    }];
    this.props.sendPicks(submission);
  }

  render() {
    let { game } = this.props;
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
        <div className="selection-form-date">{this.state.date}</div>
        <div className="selection-form-time">{this.state.time}</div>
        <div className="selection-form-line">{this.state.line}</div>
        <div className="selection-form-over">{this.state.over_under}</div>

        <label className={`selection-form-home ${game.pick === 'home' ? 'selected-button' : ''}`}>
          <div className="selection-form-home-name">{game.home}</div>
          <button onClick={() => this.submitPick("home")} />
          <img
            className='pick-button pick-home-button'
            src={`assets/logos/${game.home}.gif`}
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
