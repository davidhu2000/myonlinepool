import React from 'react';
import PropTypes from 'prop-types';
import { values } from 'lodash';

import { PoolStandingsBoxItem } from './';

class PoolStandingsBox extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }

  renderItems() {
    let { standings, members } = this.props;

    return values(standings).map(standing => (
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
          <div className="score">Wins</div>
          <div className="losses">Losses</div>
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
