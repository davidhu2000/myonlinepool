import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values } from 'lodash';

class MetricsBox extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderTeam() {
    let sortedTeams = this.props.teams.slice(0);
    sortedTeams.sort((a, b) => {
      return b.wins - a.wins;
    });
    return values(sortedTeams).map(team => (
      <div className="team-item">
        <div>
          {(team.name).toUpperCase()}
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
          {Math.floor(team.points_for / team.games_played) || 0}
        </div>
        <div>
          {Math.floor(team.points_against / team.games_played) || 0}
        </div>
        <div>
          {team.beat_over}
        </div>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div className="labels">
          <div>{this.props.section}</div>
          <div>Games Played</div>
          <div>Record</div>
          <div>Home</div>
          <div>Away</div>
          <div>Points/Game</div>
          <div>Allowed/Game</div>
          <div>Beat Over</div>
        </div>
        {this.props.teams.length > 0 && this.renderTeam()}
      </div>
    );
  }
}

MetricsBox.propTypes = {
  teams: PropTypes.shape().isRequired,
  section: PropTypes.string.isRequired
};

export { MetricsBox };
