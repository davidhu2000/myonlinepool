import React from 'react';
import { withRouter, Link } from 'react-router';
import range from 'lodash';
import autoBind from 'react-autobind';
import PickForm from 'modules/picks/subcomponents/pick_form';
import PropTypes from 'prop-types';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1
    };
    autoBind(this);
    // console.log(this.props);
  }

  submitPick(e) {
    e.preventDefault();
    console.log("submitted");
  }

  createSelections() {
    return Object.values(this.props.games).map(game => (
      <PickForm
        Picks={Object.values(this.props.picks)}
        Game={game}
      />
    ));
  }

  prevWeek() {
    if (this.state.week > 1) {
      this.setState({ week: this.state.week - 1 });
    }
  }

  nextWeek() {
    if (this.state.week < 17) {
      this.setState({ week: this.state.week + 1 });
    }
  }

  pickHomers() {
    let newPicks = {};
    Object.values(this.props.games).forEach(game => {
      let newPick = {
        user_id: 1,
        pool_id: 1,
        game_id: game.game_id,
        pick: "home"
      };
      newPicks[game.game_id] = newPick;
    });
    this.props.sendPicks(newPicks);
    // console.log(newPicks);
  }

  render() {
    return (
      <div className="picks-container">
        <div className="picks-header">
          <div>
            <i
              onClick={this.prevWeek}
              className="fa fa-caret-left"
              aria-hidden="true"
            />
            Week {this.state.week}
            <i
              onClick={this.nextWeek}
              className="fa fa-caret-right"
              aria-hidden="true"
            />
          </div>
          <div>
            <button onClick={this.pickHomers}>
            Auto-Pick
            </button>  
          </div>  
        </div>
        <div className="picks-selections">
          <div className="picks-labels">
            <div>Away</div>
            <div>Date</div>
            <div>Time</div>
            <div>Line</div>
            <div>Spread</div>
            <div>Home</div>
          </div>
          { this.createSelections() }
        </div>
      </div>
    );
  }
}

Picks.propTypes = {
  picks: PropTypes.object.isRequired,
  games: PropTypes.object.isRequired
};

export default withRouter(Picks);
