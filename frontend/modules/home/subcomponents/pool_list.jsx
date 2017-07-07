import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { values } from 'lodash';

import { PoolListItem } from './';

class PoolList extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderList() {
    let pools = values(this.props.pools);
    return pools.map(pool => (
      <PoolListItem
        key={`pool-${pool.id}`}
        title={pool.title}
        id={pool.id}
      />
    ));
  }

  render() {
    return (
      <div className="pool-list">
        <div className="pool-list-top">
          <div className="pool-list-top-title">My Pools</div>
          <div className="pool-list-top-buttons">
            <button className="button pool-create-button" onClick={() => hashHistory.push('pool/create')}>
              <div>
                <i className="fa fa-angle-right" aria-hidden="true" />
                Create Pool
              </div>
            </button>
            <button
              id="pool-join-button"
              className="button pool-join-button"
              onClick={this.props.toggleJoinFormModal}
            >
              <div>Join Pool</div>
            </button>
          </div>
        </div>
        <div className="pool-list-bottom">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

PoolList.propTypes = {
  pools: PropTypes.shape().isRequired,
  toggleJoinFormModal: PropTypes.func.isRequired
};

export { PoolList };
