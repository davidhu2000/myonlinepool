import React from 'react';
import { Link, withRouter } from 'react-router';

const StandingsBoxItem = props => {

  return (
    <div>
      {props.Name}
      {props.Score}
    </div>
  );
};

export default StandingsBoxItem;
