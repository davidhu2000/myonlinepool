import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { values } from 'lodash';

class Metrics extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  renderTeams() {
    let teams = values(this.props.teams);
    console.log(teams[0]);
    return teams.map(team => (
      <div className="team-item">
        <div>
          {team.name}
        </div>
        <div>
          {team.games_played}
        </div>
        <div>
          {team.wins} - {team.losses} - {team.ties}
        </div>
        <div>
          {team.home_wins} - {team.home_losses}
        </div>
        <div>
          {team.away_wins} - {team.away_losses}
        </div>
        <div>
          {team.beat_over}
        </div>
      </div>
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div className="metrics-container">
        <div className="metrics-header">
          <div>Team</div>
          <div>Games Played</div>
          <div>Record</div>
          <div>Home Record</div>
          <div>Away Record</div>
          <div>Beat Over</div>
        </div>
        <div className="metrics-teams">
          {this.renderTeams()}
        </div>
      </div>
    );
  }
}

Metrics.propTypes = {
  teams: PropTypes.shape().isRequired,
  fetchTeams: PropTypes.func.isRequired
};

export default withRouter(Metrics);
