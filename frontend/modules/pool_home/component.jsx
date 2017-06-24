import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';

import { PoolStandingsBox } from "common/components";
import { MessageBox, BulletinBox } from "./subcomponents";

class PoolHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 1
    };
  }

  componentDidMount() {
    let { poolId } = this.props.params;
    this.props.fetchMessages(poolId);
    this.props.fetchBulletins(poolId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.poolId !== newProps.params.poolId) {
      let { poolId } = newProps.params;
      newProps.fetchMessages(poolId);
      newProps.fetchBulletins(poolId);
    }
  }

  render() {
    return (
      <div className="pool-container">

        <div className="pool-standings">
          <PoolStandingsBox
            title="Weekly Leaders"
            standings={this.props.pool.standings[this.state.week]}
            members={this.props.pool.members}
          />
          {/*<PoolStandingsBox
            title="Season Leaders"
            standings={this.props.pool.standings}
            members={this.props.pool.members}
          />*/}
        </div>
        <div className="pool-bulletin">
          <BulletinBox
            bulletins={this.props.pool.bulletins}
          />
        </div>
        <div className="pool-coms">
          <MessageBox
            type='chat'
            messages={this.props.pool.messages}
            createMessage={this.props.createMessage}
            poolId={this.props.params.poolId}
            fetchMessages={this.props.fetchMessages}
          />
        </div>
      </div>
    );
  }
}

PoolHome.propTypes = {
  pool: PropTypes.shape({
    messages: PropTypes.shape(),
    bulletins: PropTypes.shape(),
    standings: PropTypes.shape(),
    members: PropTypes.shape()
  }).isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  fetchBulletins: PropTypes.func.isRequired
};

export default withRouter(PoolHome);
