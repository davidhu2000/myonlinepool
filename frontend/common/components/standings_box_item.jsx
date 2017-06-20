import React from 'react';

const StandingsBoxItem = props => {

  return (
    <div className="standings-box-item">
      <div className="title">{props.Name}</div>
      <div className="score">{props.Score}</div>
      <div className="losses">{props.Losses}</div>
      <div className="pool">{props.Pool}</div>
    </div>
  );
};

export { StandingsBoxItem };
