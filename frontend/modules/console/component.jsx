import React from 'react';
import autoBind from 'react-autobind';
import { GameItem } from './subcomponents/game_item';
import { withRouter } from 'react-router';
// import PropTypes from 'prop-types';

class Console extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1
    };
    autoBind(this);
  }

  componentDidMount() {
    this._redirectUnlessAdmin(this.props.userId);
    this.props.fetchGames(this.state.week);
  }

  componentWillReceiveProps(newProps) {
    this._redirectUnlessAdmin(this.props.userId);
  }

  _redirectUnlessAdmin(userId) {
    if (userId !== 1) {
      this.props.router.push(`home`);
    }
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
    if (!this.props.games[week]) {
      this.props.fetchGames(week);
    }
  }

  renderGames() {
    if (this.props.games[this.state.week]) {
      return Object.values(this.props.games[this.state.week]).map(game => (
        <GameItem
          key={game.id}
          game={game}
        />
      ));
    }
  }

  render() {
    return (
      <div className="console-container">
        <div className="console-top">
          <div className="console-header">
            <div>
              { this.state.week > 1 && (
                <i
                  onClick={() => this.updateWeek(-1)}
                  className="fa fa-caret-left"
                  aria-hidden="true"
                />
              )}

              Week {this.state.week}

              { this.state.week < 17 && (
                <i
                  onClick={() => this.updateWeek(1)}
                  className="fa fa-caret-right"
                  aria-hidden="true"
                />
              )}
            </div>
            <div>
              <button>
                Create Game
              </button>
            </div>
          </div>
          <div className="console-labels">
            <div>Away</div>
            <div>Away Score</div>
            <div>Home</div>
            <div>Home Score</div>
            <div>Line</div>
            <div>Spread</div>
          </div>
        </div>
        <div className="game-list">
          {this.renderGames()}
        </div>
      </div>
    );
  }

}

export default withRouter(Console);
