import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { WeekSwitcher } from 'common/components';
import { PickForm, LoadingForm } from './subcomponents';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1,
      loading: true
    };
    autoBind(this);
  }

  componentWillMount() {
    this.props.fetchPicks(this.state.week, this.props.params.poolId).then(
      () => this.setState({ loading: false })
    );
  }

  updateWeek(dir) {
    let week = this.state.week + dir;
    if (week < 1) {
      week = 1;
    }

    if (week > 17) {
      week = 17;
    }

    this.setState({ week });
    if (!this.props.picks[week]) {
      this.setState({ loading: true });
      this.props.fetchPicks(week, this.props.params.poolId).then(
        () => {
          // TODO: remove setTimeout after finishing loading animation
          setTimeout(() => this.setState({ loading: false }), 2000);
        }
      );
    }
  }

  pickHomers() {
    let picks = [];
    Object.values(this.props.picks[this.state.week]).forEach(game => {
      if (game.pick === '') {
        let newPick = {
          game_id: game.game_id,
          pool_id: this.props.params.poolId,
          pick: "home",
          week: game.week
        };
        picks.push(newPick);
      }
    });

    if (picks.length > 0) {
      this.props.sendPicks(picks);
    }
  }

  renderSelections() {
    if (this.state.loading) {
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(id => (
        <LoadingForm key={`loading-${id}`} />
      ));
    }

    if (this.props.picks[this.state.week]) {
      return Object.values(this.props.picks[this.state.week]).map(game => (
        <PickForm
          receiveAlerts={this.props.receiveAlerts}
          key={`pick-${game.game_id}`}
          game={game}
          sendPicks={this.props.sendPicks}
          poolId={this.props.params.poolId}
        />
      ));
    }
  }

  renderWeekRecord() {
    if (this.props.picks[this.state.week]) {
      let picks = 0;
      let misses = 0;
      Object.values(this.props.picks[this.state.week]).forEach(pick => {
        if (pick.completed) {
          if (pick.pick === 'away' && pick.away_score > pick.home_score) {
            picks += 1;
          } else if (pick.pick === 'home' && pick.home_score > pick.away_score) {
            picks += 1;
          } else {
            misses += 1;
          }
        }
      });
      return <div>{picks} - {misses}</div>;
    }
  }

  render() {
    return (
      <div className="picks-container">
        <div className="picks-top">
          <div className="picks-header">
            <WeekSwitcher week={this.state.week} updateWeek={this.updateWeek} />
            {this.renderWeekRecord()}
            <div>
              <button onClick={this.pickHomers}>
                Auto-Pick
              </button>
            </div>
          </div>
          <div className="picks-labels">
            <div>Away</div>
            <div>Time</div>
            <div>Line</div>
            <div>O/U</div>
            <div>Score</div>
            <div>Home</div>
          </div>
        </div>
        <div className="picks-selections">
          { this.renderSelections() }
        </div>
      </div>
    );
  }
}

Picks.propTypes = {
  picks: PropTypes.shape().isRequired,
  sendPicks: PropTypes.func.isRequired,
  fetchPicks: PropTypes.func.isRequired,
  receiveAlerts: PropTypes.func.isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired
};

export default Picks;
