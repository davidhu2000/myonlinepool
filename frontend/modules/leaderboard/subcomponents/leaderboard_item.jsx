import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { keys } from 'lodash';
import { shortenString } from 'helpers';

class LeaderboardItem extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderWeeks() {
    let weeks = {
      1: "0-0",
      2: "0-0",
      3: "0-0",
      4: "0-0",
      5: "0-0",
      6: "0-0",
      7: "0-0",
      8: "0-0",
      9: "0-0",
      10: "0-0",
      11: "0-0",
      12: "0-0",
      13: "0-0",
      14: "0-0",
      15: "0-0",
      16: "0-0",
      17: "0-0",
      19: "0-0",
      20: "0-0",
      22: "0-0"
    };
    console.log(keys(this.props.standings));
    keys(this.props.standings).forEach(week => (
      keys(this.props.standings[week]).forEach(userId => {
        if (userId === this.props.member.userId) {
          weeks[week] = this.props.standings[week][userId];
        }
      })
    ));

    return keys(weeks).map(week => (
      <div>{weeks[week]}</div>
    ));
  }

  render() {
    return (
      <div className="leaderboard-item">
        <div className="title">{this.props.member.name}</div>
        {this.renderWeeks()}
      </div>
    );
  }
}

LeaderboardItem.propTypes = {
  member: PropTypes.string.isRequired
};

export { LeaderboardItem };
