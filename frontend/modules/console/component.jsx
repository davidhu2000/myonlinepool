import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { FormTextInput, WeekSwitcher } from 'common/components';
import { withRouter } from 'react-router';
import { GameItem } from './subcomponents';
import { values } from 'lodash';

class AdminConsole extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1,
      currentWeek: 1,
      currentYear: 2017
    };
    autoBind(this);
  }

  componentWillMount() {
    this.setState({ currentWeek: this.props.prefs.week,
      currentYear: this.props.prefs.year,
      week: Number(this.props.prefs.week) });
  }

  componentDidMount() {
    this._redirectUnlessAdmin(this.props.userId);

    if (this.props.userId === 1) {
      this.props.fetchGames(this.state.week);
    }
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

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.updatePrefs({
      week: this.state.currentWeek,
      year: this.state.currentYear
    });
  }

  renderGames() {
    let { games } = this.props;
    let { week } = this.state;

    if (games[week]) {
      return values(games[week]).map(game => (
        <GameItem key={game.id} game={game} week={week} />
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
            <div>O/U</div>
            <div>Completed</div>
          </div>
        </div>
        <div className="game-list">
          {this.renderGames()}
        </div>
        <div className="week-form">
          <form onSubmit={this.submitForm} className="auth-form">

            <FormTextInput
              update={this.update}
              value={this.state.currentWeek}
              type='number'
              field="currentWeek"
              label='currentWeek'
              errorMessage='Please enter a valid week number'
            />
            <button type="submit" className="button week-button">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AdminConsole.propTypes = {
  games: PropTypes.shape().isRequired,
  userId: PropTypes.number.isRequired,
  fetchGames: PropTypes.func.isRequired,
  prefs: PropTypes.shape().isRequired,
  updatePrefs: PropTypes.func.isRequired
};

export default withRouter(AdminConsole);
