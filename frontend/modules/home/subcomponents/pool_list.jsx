import React from 'react';
import { Link, withRouter } from 'react-router';
import PoolListItem from './pool_list_item';

class PoolList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <PoolListItem/>
      </div>
    );
  }
}

export default PoolList;
