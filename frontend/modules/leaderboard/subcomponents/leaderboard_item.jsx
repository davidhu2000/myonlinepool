import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { keys } from 'lodash';
import { shortenString } from 'helpers';

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
        19: "0",
        20: "0",
        22: "0"
      }
    };

    autoBind(this);
  }

  renderWeeks() {
    keys(this.props.standings).forEach(week => {
      this.state.weeks[week] = this.props.standings[week][this.props.member.userId].correctPicks;
    });
    return keys(this.state.weeks).map(week => (
      <div>{this.state.weeks[week]}</div>
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
