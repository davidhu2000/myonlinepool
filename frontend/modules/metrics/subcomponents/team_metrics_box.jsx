import React from 'react';

class MetricsBox extends React.Component {

  renderTeam() {
    return this.props.teams.map(team => (
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
          {team.beat_over}
        </div>
      </div>
    ));
  }

  render() {
    return(
      <div>
        <div className="labels">
          <div>{this.props.section}</div>
          <div>Games Played</div>
          <div>Record</div>
          <div>Home</div>
          <div>Away</div>
          <div>Beat Over</div>
        </div>
        {this.renderTeam()}
      </div>  
    );
  }
}

export { MetricsBox };