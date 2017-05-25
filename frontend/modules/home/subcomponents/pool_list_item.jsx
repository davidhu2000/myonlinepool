import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolListItem = props => {

  return (
    <div className="pool-list-item">
      <Link to={`/pool/1`}>
        <p>
        {props.Name}
        </p>
      </Link>
    </div>
  );
};

export default PoolListItem;
