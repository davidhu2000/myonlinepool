import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values } from 'lodash';

class LeaderboardWeeklyItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  // renderWeeks() {
  //   let actualStandings = this.props.standings;
  //   delete actualStandings[21];
  //   keys(actualStandings).forEach(week => {
  //     this.state.weeks[week] = this.props.standings[week][this.props.member.userId].correctPicks;
  //   });
  //   return keys(this.state.weeks).slice(1).map(week => (
  //     <div>{this.state.weeks[week]}</div>
  //   ));
  // }

  // renderTotal() {
  //   let total = 0;
  //   keys(this.state.weeks).forEach(week => {
  //     total += Number(this.state.weeks[week]);
  //   });
  //   return <div className="total">{total}</div>;
  // }

  findWinner() {
    let topScore = 0;
    let winnerId = 0;
    values(this.props.standings).forEach(player => {
      if (player.correctPicks > topScore) {
        topScore = player.correctPicks;
        winnerId = player.userId;
      }
    });
    let winner = this.props.members[winnerId].name;
    return <div className="weekly-winner">{winner}</div>;
  }

  findPoints() {
    let topScore = 0;
    // let winnerId = 0;
    values(this.props.standings).forEach(player => {
      if (player.correctPicks > topScore) {
        topScore = player.correctPicks;
        // winnerId = player.userId;
      }
    });
    return <div className="weekly-points">{topScore}</div>;
  }

  render() {
    return (
      <div className="leaderboard-weekly-item">
        {this.findWinner()}
        <div className="week">
          {this.props.standings[Object.keys(this.props.standings)[0]].week}
        </div>
        {this.findPoints()}
      </div>
    );
  }
}

LeaderboardWeeklyItem.propTypes = {
  standings: PropTypes.shape().isRequired,
  members: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export { LeaderboardWeeklyItem };
