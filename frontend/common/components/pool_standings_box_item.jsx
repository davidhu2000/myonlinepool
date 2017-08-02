import React from 'react';
import PropTypes from 'prop-types';
import { shortenString } from 'helpers';

const PoolStandingsBoxItem = props => {
  return (
    <div className="pool-standings-box-item">
      <div className="title">{shortenString(props.name)}</div>
      <div className="score">{props.correctPicks}</div>
    </div>
  );
};

PoolStandingsBoxItem.propTypes = {
  name: PropTypes.string.isRequired,
  correctPicks: PropTypes.number.isRequired
};

export { PoolStandingsBoxItem };
