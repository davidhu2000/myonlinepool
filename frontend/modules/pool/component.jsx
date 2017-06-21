import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';

import { StandingsBox } from "common/components";
import { MessageBox, ModBoard } from "./subcomponents";

class Pool extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMessages(this.props.params.poolId);
  }

  render() {
    return (
      <div className="pool-container">
        <div className="pool-standings">
          <StandingsBox
            Title="Weekly Leaders"
            Standings={this.props.pool.leaders}
          />
          <StandingsBox
            Title="Season Leaders"
            Standings={this.props.pool.leaders}
          />
        </div>
        <div className="pool-bulletin">
          <ModBoard
            Chat={this.props.pool.bulletins}
            Mod={this.props.pool.admin}
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

Pool.propTypes = {
  pool: PropTypes.shape().isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired
};

export default withRouter(Pool);
