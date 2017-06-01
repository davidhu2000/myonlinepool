import React from 'react';
import { Link, withRouter } from 'react-router';

const PoolListItem = props => {

  return (
    <div className="pool-list-item">
      <Link to={`/pool/${props.Id}`}>
        <div>
          <i
          className="fa fa-angle-right"
          aria-hidden="true"/> {props.Name}
        </div>
      </Link>
    </div>
  );
};

export default PoolListItem;
