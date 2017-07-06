import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { values, sortBy } from 'lodash';

import { PoolStandingsBoxItem } from './';

class PoolStandingsBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      week: 1
    };
    autoBind(this);
  }

  updateWeek(dir) {
    let week = this.state.week + dir;
    if (week < 1) {
      week = 1;
    }

    if (week > 17) {
      week = 17;
    }

    if (this.props.standings[week]) {
      this.setState({ week });
    }
  }

  renderSwitcher() {
    if (this.props.weeklyStandings === "true") {
      return (
        <div className="week-switcher">
          { this.state.week > 1 && (
            <i 
              onClick={() => this.updateWeek(-1)}
              className="fa fa-caret-left"
              aria-hidden="true"
            />
          )}

          Week { this.state.week }

          { this.state.week < 17 && (
            <i
              onClick={() => this.updateWeek(1)}
              className="fa fa-caret-right"
              aria-hidden="true"
            />
          )}
        </div>
      );
    }
  }

  renderItems() {
    let { standings, members } = this.props;

    return sortBy(values(standings), 'correctPicks').reverse().slice(0, 10).map(standing => (
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
            {this.renderSwitcher()}
          </div>
        </div>
        <div className="pool-standings-box-top-item">
          <div className="title">Player</div>
          <div className="score">Picks</div>
          <div className="losses">Record</div>
        </div>
        {this.renderItems()}
      </div>
    );
  }
}

PoolStandingsBox.propTypes = {
  standings: PropTypes.shape().isRequired,
  members: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired
};

export { PoolStandingsBox };
