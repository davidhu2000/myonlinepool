import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { values } from 'lodash';
import { MetricsBox } from './subcomponents/team_metrics_box';

class Metrics extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }

  renderTeams(divTeams, sectionName) {
    if (values(this.props.teams).length < 1) {
      let parsedTeams = [
        {
          name: divTeams[0],
          games_played: 0,
          wins: 0,
          losses: 0,
          ties: 0,
          home_wins: 0,
          home_losses: 0,
          home_ties: 0,
          away_wins: 0,
          away_losses: 0,
          away_ties: 0,
          points_for: 0,
          points_against: 0
        },
        {
          name: divTeams[1],
          games_played: 0,
          wins: 0,
          losses: 0,
          ties: 0,
          home_wins: 0,
          home_losses: 0,
          home_ties: 0,
          away_wins: 0,
          away_losses: 0,
          away_ties: 0,
          points_for: 0,
          points_against: 0
        },
        {
          name: divTeams[2],
          games_played: 0,
          wins: 0,
          losses: 0,
          ties: 0,
          home_wins: 0,
          home_losses: 0,
          home_ties: 0,
          away_wins: 0,
          away_losses: 0,
          away_ties: 0,
          points_for: 0,
          points_against: 0
        },
        {
          name: divTeams[3],
          games_played: 0,
          wins: 0,
          losses: 0,
          ties: 0,
          home_wins: 0,
          home_losses: 0,
          home_ties: 0,
          away_wins: 0,
          away_losses: 0,
          away_ties: 0,
          points_for: 0,
          points_against: 0
        }
      ];
      return (
        <MetricsBox
          teams={parsedTeams}
          section={sectionName}
        />);
    } else {
      let teams = values(this.props.teams);
      let ConfTeams = [];
      teams.forEach(team => {
        if (team.name === divTeams[0] ||
            team.name === divTeams[1] ||
            team.name === divTeams[2] ||
            team.name === divTeams[3]) {
          ConfTeams.push(team);
        }
      });
      return (
        <MetricsBox
          teams={ConfTeams}
          section={sectionName}
        />);
    }
  }

  render() {
    return (
      <div className="metrics-container">
        <div className="conference-header">
          American Football Conference
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["patriots", "dolphins", "jets", "bills"], "AFC East")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["ravens", "bengals", "steelers", "browns"], "AFC North")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["texans", "jaguars", "colts", "titans"], "AFC South")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["chiefs", "broncos", "raiders", "chargers"], "AFC West")}
        </div>
        <div className="conference-header">
          National Football Conference
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["giants", "eagles", "redskins", "cowboys"], "NFC East")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["vikings", "packers", "lions", "bears"], "NFC North")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["buccaneers", "saints", "panthers", "falcons"], "NFC South")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["49ers", "seahawks", "cardinals", "rams"], "NFC West")}
        </div>
        <div className="bottom-links">
          <a className="nfl-link" href="https://www.nfl.com" rel="noopener noreferrer" target="_blank">
            NFL.com
          </a>
          <a className="espn-link" href="https://www.espn.com" rel="noopener noreferrer" target="_blank">
            ESPN.com
          </a>
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
