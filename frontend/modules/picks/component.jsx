import React from 'react';
import { withRouter, Link } from 'react-router';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { PickForm } from './subcomponents';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1
    };
    autoBind(this);
  }

  componentWillMount() {
    this.props.fetchPicks(this.state.week, this.props.params.poolId);
  }

  prevWeek() {
    if (this.state.week > 1) {
      this.setState({ week: this.state.week - 1 });
      this.props.fetchPicks(this.state.week, this.props.params.poolId);
    }
  }

  nextWeek() {
    if (this.state.week < 17) {
      this.setState({ week: this.state.week + 1 });
      this.props.fetchPicks(this.state.week, this.props.params.poolId);
    }
  }

  pickHomers() {
    let newPicks = [];
    Object.values(this.props.picks).forEach(game => {
      if (game.pick === '') {
        let newPick = {
          game_id: game.game_id,
          pick: "home"
        };
        newPicks.push(newPick);
      }
    });
    let submission = {
      poolId: this.props.params.poolId,
      games: newPicks
    };
    this.props.sendPicks(submission);
  }

  renderSelections() {
    return Object.values(this.props.picks).map(game => (
      <PickForm
        key={`pick-${game.game_id}`}
        game={game}
        sendPick={this.props.sendPick}
        poolId={this.props.params.poolId}
      />
    ));
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
          { this.renderSelections() }
        </div>
      </div>
    );
  }
}

Picks.propTypes = {
  picks: PropTypes.shape().isRequired,
  userId: PropTypes.number.isRequired,
  sendPick: PropTypes.func.isRequired,
  sendPicks: PropTypes.func.isRequired,
  fetchPicks: PropTypes.func.isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Picks);
