import React from 'react';

const PoolStandingsBoxItem = props => {

  return (
    <div className="pool-standings-box-item">
      <div className="title">{props.Name}</div>
      <div className="score">{props.Score}</div>
      <div className="losses">{props.Losses}</div>
    </div>
  );
};

export { PoolStandingsBoxItem };
