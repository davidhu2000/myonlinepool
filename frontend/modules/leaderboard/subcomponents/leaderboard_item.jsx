import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values, keys } from 'lodash';
import { leaderString } from 'helpers';

class LeaderboardItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weeks: {
        1: "0",
        2: "0",
        3: "0",
        4: "0",
        5: "0",
        6: "0",
        7: "0",
        8: "0",
        9: "0",
        10: "0",
        11: "0",
        12: "0",
        13: "0",
        14: "0",
        15: "0",
        16: "0",
        17: "0",
        18: "0",
        19: "0",
        20: "0",
        22: "0"
      }
    };

    autoBind(this);
  }

  findWeeklyHighest(week) {
    let actualStandings = this.props.standings;
    delete actualStandings[21];
    let highestScore = 0;
    values(actualStandings[week]).forEach(weeklyStanding => {
      if (weeklyStanding.correctPicks > highestScore) {
        highestScore = weeklyStanding.correctPicks;
      }
    });
    return highestScore;
  }

  renderWeeks() {
    let actualStandings = this.props.standings;
    delete actualStandings[0];
    delete actualStandings[21];
    keys(actualStandings).forEach(week => {
      if (this.props.standings[week][this.props.member.userId]) {
        this.state.weeks[week] = this.props.standings[week][this.props.member.userId].correctPicks;
      }
    });
    return keys(this.state.weeks).map(week => (
      <div className={this.state.weeks[week] >= this.findWeeklyHighest(week) && this.state.weeks[week] > 0 ? "highlight" : ""}>{this.state.weeks[week]}</div>
    ));
  }

  renderTotal() {
    let total = 0;
    keys(this.state.weeks).forEach(week => {
      total += Number(this.state.weeks[week]);
    });
    return <div className="total">{total}</div>;
  }

  render() {
    return (
      <div className="leaderboard-item">
        <div className="title">{leaderString(this.props.member.name)}</div>
        {this.renderWeeks()}
        {this.renderTotal()}
      </div>
    );
  }
}

LeaderboardItem.propTypes = {
  member: PropTypes.shape().isRequired,
  standings: PropTypes.shape().isRequired
};

export { LeaderboardItem };
