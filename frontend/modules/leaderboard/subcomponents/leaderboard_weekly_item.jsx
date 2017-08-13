import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values } from 'lodash';
import { shortestString } from 'helpers';

class LeaderboardWeeklyItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  findWinner() {
    let topScore = 0;
    let winnerId = [];
    values(this.props.standings).forEach(player => {
      if (player.correctPicks > topScore) {
        topScore = player.correctPicks;
        winnerId = [player.userId];
      } else if (player.correctPicks === topScore) {
        winnerId.push(player.userId);
      }
    });
    if (winnerId.length > 5) {
      return winnerId.slice(0, 5).forEach(id => (
        <div>{shortestString(this.props.members[id].name)}</div>
      ));
    } else if (winnerId.length > 1) {
      return winnerId.map(id => (
        <div>{shortestString(this.props.members[id].name)}</div>
      ));
    } else {
      return <div>{this.props.members[winnerId[0]].name}</div>;
    }
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
        <div className="weekly-winner">
          {this.findWinner()}
        </div>
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
