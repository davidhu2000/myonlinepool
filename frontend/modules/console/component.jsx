import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { WeekSwitcher } from 'common/components';
import { GameItem } from './subcomponents';

class AdminConsole extends React.Component {
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
    this._redirectUnlessAdmin(newProps.userId);
  }

  _redirectUnlessAdmin(userId) {
    if (userId !== 1) {
      this.props.router.replace(`home`);
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
          week={this.state.week}
        />
      ));
    }
  }

  render() {
    return (
      <div className="console-container">
        <div className="console-top">
          <div className="console-header">
            <WeekSwitcher week={this.state.week} updateWeek={this.updateWeek} />
          </div>
          <div className="console-labels">
            <div>Away</div>
            <div>Away Score</div>
            <div>Home</div>
            <div>Home Score</div>
            <div>Line</div>
            <div>Spread</div>
            <div>Completed</div>
          </div>
        </div>
        <div className="game-list">
          {this.renderGames()}
        </div>
      </div>
    );
  }
}

AdminConsole.propTypes = {
  games: PropTypes.shape().isRequired,
  userId: PropTypes.number.isRequired,
  fetchGames: PropTypes.func.isRequired
};

export default withRouter(AdminConsole);
