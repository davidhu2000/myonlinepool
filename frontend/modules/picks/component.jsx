/* global $ */

import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { values } from 'lodash';
import { WeekSwitcher } from 'common/components';
import { PickForm, LoadingForm, PicksDropdown } from './subcomponents';

class Picks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1,
      loading: true,
      showDropdown: false
    };
    autoBind(this);
  }

  componentWillMount() {
    this.props.fetchPicks(this.state.week, this.props.params.poolId).then(
      () => this.setState({ loading: false })
    );
  }

  toggleDropdown() {
    this.setState({ showDropdown: !this.state.showDropdown });
  }

  updateWeek(dir) {
    let week = this.state.week + dir;
    if (week === 21) {
      week += dir;
    }

    if (week < 1) {
      week = 1;
    }

    if (week > 22) {
      week = 22;
    }

    this.setState({ week });
    if (!this.props.picks[week]) {
      this.setState({ loading: true });
      this.props.fetchPicks(week, this.props.params.poolId).then(
        () => {
          // TODO: remove setTimeout after finishing loading animation
          setTimeout(() => this.setState({ loading: false }), 200);
        }
      );
    }
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }

  pickHome() {
    let picks = [];
    values(this.props.picks[this.state.week]).forEach(game => {
      if (game.pick !== 'home') {
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
    this.toggleDropdown();
  }

  pickAway() {
    let picks = [];
    values(this.props.picks[this.state.week]).forEach(game => {
      if (game.pick !== 'away') {
        let newPick = {
          game_id: game.game_id,
          pool_id: this.props.params.poolId,
          pick: "away",
          week: game.week
        };
        picks.push(newPick);
      }
    });
    if (picks.length > 0) {
      this.props.sendPicks(picks);
    }
    this.toggleDropdown();
  }

  pickFavorites() {
    let picks = [];
    values(this.props.picks[this.state.week]).forEach(game => {
      // if (game.pick === '') {
      if (game.line > 0) {
        let newPick = {
          game_id: game.game_id,
          pool_id: this.props.params.poolId,
          pick: "away",
          week: game.week
        };
        picks.push(newPick);
      } else {
        let newPick = {
          game_id: game.game_id,
          pool_id: this.props.params.poolId,
          pick: "home",
          week: game.week
        };
        picks.push(newPick);
      }
      // }
    });
    if (picks.length > 0) {
      this.props.sendPicks(picks);
    }
    this.toggleDropdown();
  }

  renderAlerts() {
    if (!this.props.pool.paymentMade) {
      return (
        <div className="pool-alert">
          Pool requires payment.
        </div>
      );
    }
  }

  renderSelections() {
    if (this.state.loading) {
      let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
      let count = 16;
      switch (this.state.week) {
        case 18:
        case 19:
          count = 4;
          break;
        case 20:
          count = 2;
          break;
        case 22:
          count = 1;
          break;
        default:
          count = 16;
      }

      return array.slice(0, count).map(id => (
        <LoadingForm key={`loading-${id}`} />
      ));
    }

    if (this.props.picks[this.state.week]) {
      return values(this.props.picks[this.state.week]).map(game => (
        <PickForm
          receiveAlerts={this.props.receiveAlerts}
          key={`pick-${game.game_id}`}
          game={game}
          sendPicks={this.props.sendPicks}
          poolId={this.props.params.poolId}
          paymentMade={this.props.pool.paymentMade}
        />
      ));
    }
  }

  renderWeekRecord() {
    if (this.props.picks[this.state.week]) {
      let picks = 0;
      let misses = 0;
      values(this.props.picks[this.state.week]).forEach(pick => {
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
      return <div className="correct-picks">{picks} - {misses}</div>;
    }
  }

  render() {
    return (
      <div className="picks-container">
        <div className="picks-top">
          <div className="picks-header">
            <WeekSwitcher week={this.state.week} updateWeek={this.updateWeek} />
            {this.props.pool.title}
            {this.renderWeekRecord()}
            <div>
              <button onClick={this.toggleDropdown}>
                <div className="auto-button">
                  <i className="fa fa-caret-down" aria-hidden="true" />
                  Auto Pick
                </div>
              </button>
              { this.state.showDropdown ?
                <PicksDropdown
                  pickFavorites={this.pickFavorites}
                  pickAway={this.pickAway}
                  pickHome={this.pickHome}
                  toggleDropdown={this.toggleDropdown}
                /> : null }
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

        { this.renderAlerts() }
        { this.renderSelections() }

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
  }).isRequired,
  pool: PropTypes.shape({
    title: PropTypes.string.isRequired,
    paymentMade: PropTypes.bool.isRequired
  }).isRequired
};

export default Picks;
