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
    console.log(this.props);
  }

  componentDidMount() {
    // if (this.props.game.pick !== "") {
    //   let chosen = document.getElementById(this.props.game[this.props.game.pick]);
    //   chosen.classList.remove('pick-button');
    //   chosen.classList.add('selected-button');
    // }
  }

  submitPick(pick) {
    // let away = document.getElementById(this.props.game.away);
    // let home = document.getElementById(this.props.game.home);
    // if (pick === "away") {
    //   away.classList.add('selected-button');
    //   home.classList.remove('selected-button');
    // } else {
    //   home.classList.add('selected-button');
    //   away.classList.remove('selected-button');
    // }
    let submission = {
      poolId: this.props.poolId,
      games: [{
        game_id: this.props.game.id, 
        pick
      }]
    }
    this.props.sendPick(submission)
  }

  render() {
    return (
      <div className="selection-item">
        <label className="selection-form-away" id={this.props.game.away}>
          <button onClick={() => this.submitPick("away")} />
          <img
            className="pick-button pick-away-button"
            src={`assets/logos/${this.props.game.away}.gif`} 
          />
          <div className="selection-form-away-name">
            {this.props.game.away}
          </div>
        </label>
        <div className="selection-form-date">{this.state.date}</div>
        <div className="selection-form-time">{this.state.time}</div>
        <div className="selection-form-line">{this.state.line}</div>
        <div className="selection-form-over">{this.state.over_under}</div>
        <label className="selection-form-home" id={this.props.game.home}>
          <div className="selection-form-home-name">{this.props.game.home}</div>
          <button onClick={() => this.submitPick("home")} />
          <img
            className='pick-button pick-home-button'
            src={`assets/logos/${this.props.game.home}.gif`}
          />
        </label>
      </div>
    );
  }
}

PickForm.propTypes = {
  picks: PropTypes.array.isRequired,
  game: PropTypes.object.isRequired
};

export { PickForm };
