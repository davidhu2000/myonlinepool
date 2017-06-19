import React from 'react';
import { Link, withRouter } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.Game.game_id,
      home: this.props.Game.home,
      away: this.props.Game.away,
      pick: "",
      date: "1/2/3",
      time: "2:00 PM",
      line: "-200",
      over_under: "11"
    };
    autoBind(this);
  }

  componentDidMount() {
    if (this.props.Picks) {
      this.props.Picks.forEach(pick => {
        if (pick.game_id === this.state.id) {
          let game = document.getElementById(this.state[pick.pick]);
          game.classList.remove('pick-button');
          game.classList.add('selected-button');
        }
      });
    }
  }

  submitPick(pick) {
    let away = document.getElementById(this.props.Game.away);
    let home = document.getElementById(this.props.Game.home);
    if (pick === "away") {
      away.classList.add('selected-button');
      home.classList.remove('selected-button');
    } else {
      home.classList.add('selected-button');
      away.classList.remove('selected-button');
    }
  }

  render() {
    return (
      <div className="selection-item">
        <label className="selection-form-away" id={this.props.Game.away}>
          <button onClick={() => this.submitPick("away")} />
          <img
            className="pick-button pick-away-button"
            src={`assets/logos/${this.props.Game.away}.gif`} 
          />
          <div className="selection-form-away-name">
            {this.state.away}
          </div>
        </label>
        <div className="selection-form-date">{this.state.date}</div>
        <div className="selection-form-time">{this.state.time}</div>
        <div className="selection-form-line">{this.state.line}</div>
        <div className="selection-form-over">{this.state.over_under}</div>
        <label className="selection-form-home" id={this.props.Game.home}>
          <div className="selection-form-home-name">{this.state.home}</div>
          <button onClick={() => this.submitPick("home")} />
          <img
            className='pick-button pick-home-button'
            src={`assets/logos/${this.props.Game.home}.gif`}
          />
        </label>
      </div>
    );
  }
}

PickForm.propTypes = {
  Picks: PropTypes.array.isRequired,
  Game: PropTypes.object.isRequired
};

export default PickForm;
