import React from 'react';
import PropTypes from 'prop-types';
import { values, sortBy } from 'lodash';

import { PoolStandingsBoxItem } from './';

class PoolStandingsBox extends React.Component {
  constructor(props) {
    super(props);
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
          <h1>
            {this.props.title}
          </h1>
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
