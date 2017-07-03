import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import { calculateSeasonStandings } from 'helpers';
import { PoolStandingsBox } from "common/components";
import { MessageBox, BulletinBox } from "./subcomponents";

class PoolHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 0
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

  checkForPayment() {
    if (!this.props.pool.paymentMade) {
      return (
        <div className="pool-alert">
          Please click here to make your payment.
          <br />
          <Link to={`pool/${this.props.pool.id}/payment`}>
            Click Here
          </Link>
        </div>
      );
    }
  }

  render() {
    let { pool } = this.props;

    return (
      <div className="pool-container">
        { this.checkForPayment() }
        <div className="pool-standings">
          <PoolStandingsBox
            title="Weekly Leaders"
            standings={pool.standings[this.state.week]}
            members={pool.members}
          />
          <PoolStandingsBox
            title="Season Leaders"
            standings={calculateSeasonStandings(pool.standings)}
            members={pool.members}
          />
        </div>

        <div className="pool-bulletin">
          <BulletinBox bulletins={pool.bulletins} />
        </div>

        <div className="pool-coms">
          <MessageBox
            type='chat'
            messages={pool.messages}
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
    members: PropTypes.shape(),
    paymentMade: PropTypes.bool.isRequired
  }).isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  fetchBulletins: PropTypes.func.isRequired
};

export default withRouter(PoolHome);
