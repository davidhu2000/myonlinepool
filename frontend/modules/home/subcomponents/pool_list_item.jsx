import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolListItem = props => {

  return (
    <div className="pool-list-item">
      {props.Name}
    </div>
  );
};

export default PoolListItem;
