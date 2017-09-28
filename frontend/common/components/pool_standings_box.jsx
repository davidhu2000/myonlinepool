import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values, sortBy } from 'lodash';

import { WeekSwitcher } from 'common/components';
import { PoolStandingsBoxItem } from './';

class PoolStandingsBox extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderSwitcher() {
    if (this.props.weeklyStandings === "true") {
      return (
        <WeekSwitcher week={this.props.week} updateWeek={this.props.updateWeek} />
      );
    }
  }

  renderItems() {
    let { standings, members } = this.props;

    return sortBy(values(standings), 'correctPicks').reverse().slice(0, 5).map(standing => (
      <PoolStandingsBoxItem
        key={Math.random()}
        name={members[standing.userId].name}
        correctPicks={standing.correctPicks}
        wrongPicks={standing.wrongPicks}
      />
    ));
  }

  render() {
    return (
      <div className="pool-standings-box">
        <div className="pool-standings-box-title">
          <div className="title">
            {this.props.title}
          </div>
          <div>
            {/* {this.renderSwitcher()} */}
          </div>
        </div>
        <div className="pool-standings-box-top-item">
          <div className="title">Player</div>
          <div className="score">Points</div>
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

PoolStandingsBox.propTypes = {
  standings: PropTypes.shape().isRequired,
  members: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  weeklyStandings: PropTypes.string.isRequired,
  week: PropTypes.number.isRequired,
  updateWeek: PropTypes.func.isRequired
};

export { PoolStandingsBox };
