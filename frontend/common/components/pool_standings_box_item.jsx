import React from 'react';
import PropTypes from 'prop-types';

const PoolStandingsBoxItem = props => {
  return (
    <div className="pool-standings-box-item">
      <div className="title">{props.name}</div>
      <div className="score">{props.correctPicks}</div>
      <div className="losses">{props.correctPicks} - {props.wrongPicks}</div>
    </div>
  );
};

PoolStandingsBoxItem.propTypes = {
  name: PropTypes.string.isRequired,
  correctPicks: PropTypes.number.isRequired,
  wrongPicks: PropTypes.number.isRequired
};

export { PoolStandingsBoxItem };
