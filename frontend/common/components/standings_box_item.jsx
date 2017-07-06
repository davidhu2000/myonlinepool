import React from 'react';
import PropTypes from 'prop-types';
import { shortenString } from 'helpers';

const StandingsBoxItem = ({ standing }) => {
  return (
    <div className="standings-box-item">
      <div className="title">{shortenString(standing.userName)}</div>
      <div className="pool">{shortenString(standing.poolName)}</div>
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
