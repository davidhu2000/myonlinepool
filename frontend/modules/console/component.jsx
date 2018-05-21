import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { FormTextInput, WeekSwitcher } from 'common/components';
import { withRouter } from 'react-router';
import { values } from 'lodash';
import { GameItem } from './subcomponents';
import { updateSchedule, addGame } from './utils';

class AdminConsole extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1,
      currentWeek: 1,
      currentYear: 2018,
      addHomeId: 0,
      addAwayId: 0,
      addSeason: 2018,
      addWeek: 0,
      addStartTime: ''
    };
    autoBind(this);
  }

  componentWillMount() {
    this.setState({
      currentWeek: this.props.prefs.week,
      currentYear: this.props.prefs.year,
      week: Number(this.props.prefs.week)
    });
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

    if (week > 22) {
      week = 22;
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

  submitAddGame(e) {
    e.preventDefault();
    // console.log(this.state.addStartTime);
    addGame({
      homeid: this.state.addHomeId,
      awayid: this.state.addAwayId,
      start_time: this.state.addStartTime,
      season: this.state.addSeason,
      week: this.state.week
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
        <div className="game-list">{this.renderGames()}</div>
        <div className="add-game-container">
          <div className="add-game-form">
            <form onSubmit={this.submitAddGame} className="auth-form">
              <FormTextInput
                update={this.update}
                value={this.state.addWeek}
                type="number"
                field="addWeek"
                label="Week"
                errorMessage="Please enter a valid week number"
              />

              <FormTextInput
                update={this.update}
                value={this.state.addSeason}
                type="number"
                field="addSeason"
                label="Season"
                errorMessage="Please enter a valid season number"
              />

              <FormTextInput
                update={this.update}
                value={this.state.addHomeId}
                type="number"
                field="addHomeId"
                label="HomeId"
                errorMessage="Please enter a valid home id"
              />

              <FormTextInput
                update={this.update}
                value={this.state.addAwayId}
                type="number"
                field="addAwayId"
                label="AwayId"
                errorMessage="Please enter a valid away id"
              />

              <FormTextInput
                update={this.update}
                value={this.state.addStartTime}
                type="text"
                field="addStartTime"
                label="Start Time"
                errorMessage="Please enter a valid start time"
              />

              <button type="submit" className="button week-button">
                Add Game
              </button>
            </form>
          </div>
          <div className="add-game-info">
            <ul>
              <li className="team-id-title">Team ids</li>
              <li>1 Cardinals, 2 Falcons, 3 Ravens, 4 Bills</li>
              <li>5 Panthers, 6 Bears, 7 Bengals, 8 Browns</li>
              <li>9 Cowboys, 10 Broncos, 11 Lions, 12 Packers</li>
              <li>13 Texans, 14 Colts, 15 Jaguars, 16 Chiefs</li>
              <li>17 Dolphins, 18 Vikings, 19 Giants, 20 Jets</li>
              <li>21 Patriots, 22 Saints, 23 Raiders, 24 Eagles</li>
              <li>25 Steelers, 26 Chargers, 27 49ers, 28 Seahawks</li>
              <li>29 Rams, 30 Buccaneers, 31 Texans, 32 Redskins</li>
            </ul>

            <div className="start-time-format">
              <b>Start Time Format</b>
              <br />
              <br />
              9/6/18 at 6:20 into UTC:
              <br />
              <br />
              2018-09-07T01:20:00.000Z
              <br />
              <br />
              https://www.worldtimebuddy.com/pst-to-utc-converter
            </div>
          </div>
        </div>
        <div className="week-form">
          <form onSubmit={this.submitForm} className="auth-form">
            <FormTextInput
              update={this.update}
              value={this.state.currentWeek}
              type="number"
              field="currentWeek"
              label="currentWeek"
              errorMessage="Please enter a valid week number"
            />
            <button type="submit" className="button week-button">
              Update Week
            </button>
          </form>
          <button onClick={() => updateSchedule()} className="schedule-button">
            Update Schedule
          </button>
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
