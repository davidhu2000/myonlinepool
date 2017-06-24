import React from 'react';

const PoolStandingsBoxItem = props => {

  return (
    <div className="pool-standings-box-item">
      <div className="title">{props.name}</div>
      <div className="score">{props.correct}</div>
      <div className="losses">{props.wrong}</div>
    </div>
  );
};

export { PoolStandingsBoxItem };
