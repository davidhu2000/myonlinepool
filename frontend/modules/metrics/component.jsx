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
    let teams = values(this.props.teams);
    let AFCTeams = [];
    teams.forEach(team => {
      if (team.name === divTeams[0] || team.name === divTeams[1] || team.name === divTeams[2] || team.name === divTeams[3]) {
        AFCTeams.push(team);
      }
    });
    return <MetricsBox
            teams={AFCTeams}
            section={sectionName}
           />;
  }

  render() {
    return (
      <div className="metrics-container">
        <div className="conference-header">
          American Football Conference
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["patriots", "dolphins", "jets", "bills"], "AFC East Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["ravens", "bengals", "steelers", "browns"], "AFC North Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["texans", "jaguars", "colts", "titans"], "AFC South Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["chiefs", "broncos", "raiders", "chargers"], "AFC West Teams")}
        </div>
        <div className="conference-header">
          National Football Conference
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["giants", "eagles", "redskins", "cowboys"], "NFC East Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["vikings", "packers", "lions", "bears"], "NFC North Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["buccaneers", "saints", "panthers", "falcons"], "NFC South Teams")}
        </div>
        <div className="metrics-teams">
          {this.renderTeams(["49ers", "seahawks", "cardinals", "rams"], "NFC West Teams")}
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
