import React from 'react';
import PropTypes from 'prop-types';

const StandingsBoxItem = ({ standing }) => {
  return (
    <div className="standings-box-item">
      <div className="title">{standing.userName}</div>
      <div className="pool">{standing.poolName}</div>
      <div className="score">{standing.correctPicks}</div>
      <div className="losses">{standing.correctPicks} - {standing.wrongPicks}</div>
    </div>
  );
};

StandingsBoxItem.propTypes = {
  standing: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    correctPicks: PropTypes.number.isRequired,
    wrongPicks: PropTypes.number.isRequired,
    poolName: PropTypes.string.isRequired
  }).isRequired
};

export { StandingsBoxItem };
