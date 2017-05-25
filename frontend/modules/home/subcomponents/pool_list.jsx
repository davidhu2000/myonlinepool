import React from 'react';
import { Link, withRouter } from 'react-router';
import PoolListItem from './pool_list_item';

class PoolList extends React.Component {
  constructor(props) {
    super(props);
    this.genList = this.genList.bind(this);
  }

  genList() {
    let pools = this.props.Pools;
    return pools.map( pool => (
      <PoolListItem
        Name={pool.name}
        />
    ));
  }

  render() {
    return (
      <div className="pool-list">
        {this.props.Title}
        {this.genList()}
      </div>
    );
  }
}

export default PoolList;
