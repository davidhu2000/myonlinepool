import React from 'react';
import { Link, withRouter } from 'react-router';

class PickForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.Game.id,
      home: this.props.Game.home,
      away: this.props.Game.away,
      pick: ""
    }

    this.submitPick = this.submitPick.bind(this);
  }

  submitPick(pick) {
    if (pick === "away") {
      let away = document.getElementById(this.props.Game.away);
      away.classList.add('selected-button');
    } else {
      let home = document.getElementById(this.props.Game.home);
      home.classList.add('selected-button');
    }
  }

  render() {
    return (
      <div className="selection-item">
        <label>
          <button onClick={() => this.submitPick("away")}
            />
          <img id={this.props.Game.away} src={`assets/logos/${this.props.Game.away}.gif`} />
        </label>
      <div>At</div>
        <label>
          <button onClick={() => this.submitPick("home")}
              />
            <img id={this.props.Game.home} src={`assets/logos/${this.props.Game.home}.gif`} />
        </label>
      </div>
    );
  }
}

export default PickForm;
