import React from 'react';
import PropTypes from 'prop-types';

class MetricsBox extends React.Component {

  renderTeam() {
    let sortedTeams = [this.props.teams[0]];
    this.props.teams.slice(1).forEach(team => {
      if (team.wins > sortedTeams[0].wins) {
        sortedTeams.unshift(team);
      } else {
        sortedTeams.push(team);
      }
    });
    return sortedTeams.map(team => (
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
          {team.points_for / team.games_played}
        </div>
        <div>
          {team.points_against / team.games_played}
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
        {this.renderTeam()}
      </div>
    );
  }
}

MetricsBox.propTypes = {
  teams: PropTypes.shape().isRequired,
  section: PropTypes.string.isRequired
};

export { MetricsBox };
