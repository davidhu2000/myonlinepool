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
    // this.expressPick = this.expressPick.bind(this);
  }

  componentDidMount() {
    console.log("k");
    if (this.props.Picks) {
      let picks = this.props.Picks;
      picks.forEach((pick) => {
        // console.log(pick);
        if (pick.id === this.state.id) {

          // let selection = pick.pick;
          console.log(pick.pick);
          let game = document.getElementById(pick.pick);
          console.log(game);
          game.classList.remove('pick-button');
          game.classList.add('selected-button');
        }
      })
    }
  }

  // expressPick() {
  //   if (this.props.Picks) {
  //     let picks = this.props.Picks;
  //     picks.forEach((pick) => {
  //       // console.log(pick);
  //       if (pick.id === this.state.id) {
  //
  //         // let selection = pick.pick;
  //         console.log(pick.pick);
  //         let game = document.getElementById(pick.pick);
  //         console.log(game);
  //         // game.classList.remove('pick-button');
  //         // game.classList.add('selected-button');
  //       }
  //     })
  //   }
  // }

  submitPick(pick) {
    let away = document.getElementById(this.props.Game.away);
    let home = document.getElementById(this.props.Game.home);
    if (pick === "away") {
      away.classList.remove('pick-button');
      away.classList.add('selected-button');
      home.classList.remove('selected-button');
      home.classList.add('pick-button');
    } else {
      home.classList.remove('pick-button');
      home.classList.add('selected-button');
      away.classList.remove('selected-button');
      away.classList.add('pick-button');
    }
  }

  render() {
    return (
      <div className="selection-item">
        <label>
          <button onClick={() => this.submitPick("away")}
            />
          <img
            className="pick-button"
            id={this.props.Game.away}
            src={`assets/logos/${this.props.Game.away}.gif`} />
        </label>
      <div>At</div>
        <label>
          <button onClick={() => this.submitPick("home")}
              />
            <img
              className='pick-button'
              id={this.props.Game.home}
              src={`assets/logos/${this.props.Game.home}.gif`} />
        </label>

      </div>
    );
  }
}

export default PickForm;
