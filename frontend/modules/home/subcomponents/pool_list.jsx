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

  fillEmptyPage() {
    let pools = values(this.props.pools);
    if (values(pools).length < 1) {
      return <div className="pool-list-alert">Create or Join a pool to start playing</div>;
    }
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
          <div className="pool-list-top-title">Pools</div>
        </div>
        <div className="pool-list-bottom">
          <div>
            <button onClick={() => hashHistory.push('pool/create')}>
              <div className="button pool-create-button">
                <i className="fa fa-angle-right" aria-hidden="true" />
                Create Pool
              </div>
            </button>
            <button
              id="pool-join-button"
              onClick={this.props.toggleJoinFormModal}
            >
              <div className="button pool-join-button">
                <i className="fa fa-angle-right" aria-hidden="true" />
                Join Pool
              </div>
            </button>
          </div>
          <div className="pool-list-bottom-bottom">
            {this.renderList()}
          </div>
          {/* {this.fillEmptyPage()} */}
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
