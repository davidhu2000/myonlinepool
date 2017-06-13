import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolListItem = props => {

  return (
    <div className="pool-list-item">
        <div>
          <Link to={`/pool/${props.Id}`}>
          <i
          className="fa fa-angle-right"
          aria-hidden="true"/> {props.Name}
          </Link>
        </div>
    </div>
  );
};

export default PoolListItem;
