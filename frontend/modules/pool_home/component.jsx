import React from 'react';
import { withRouter, Link } from 'react-router';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { calculateSeasonStandings } from 'helpers';
import { PoolStandingsBox } from "common/components";
import { MessageBox, BulletinBox, WeeklyWinners } from "./subcomponents";

class PoolHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: 1
    };
    autoBind(this);
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

  checkForAdminPayment() {
    if (!this.props.pool.paymentMade && this.props.user.id === this.props.pool.moderatorId) {
      return (
        <div className="pool-alert">
          <Link to={`pool/${this.props.pool.id}/payment`}>
            Trial period will end after 14 days. Please click here to make your payment.
          </Link>
        </div>
      );
    }
  }

  // checkForMemberPayment() {
  //   if (!this.props.pool.members[this.props.user.id].paid && this.props.user.id !== this.props.pool.moderatorId) {
  //     return (
  //       <div className="pool-alert">
  //         <Link to={`pool/${this.props.pool.id}/payment`}>
  //           Please pay the buy-in to your pool administrator.
  //         </Link>
  //       </div>
  //     );
  //   }
  // }

  updateWeek(dir) {
    let week = this.state.week + dir;
    if (week === 21) {
      week += dir;
    }

    if (week < 1) {
      week = 1;
    }

    if (week > 22) {
      week = 22;
    }

    if (this.props.pool.standings[week]) {
      this.setState({ week });
    }
  }

  render() {
    let { pool } = this.props;
    console.log(pool.standings);

    return (
      <div className="pool-container">
        { this.checkForAdminPayment() }
        <div className="pool-standings">
          <PoolStandingsBox
            title={`Week ${this.state.week} Leaders`}
            standings={pool.standings[this.state.week]}
            members={pool.members}
            weeklyStandings="true"
            updateWeek={this.updateWeek}
            week={this.state.week}
          />
          <PoolStandingsBox
            title="Season Leaders"
            standings={calculateSeasonStandings(pool.standings)}
            members={pool.members}
          />
        </div>

        <div className="pool-bulletin">
          <BulletinBox
            bulletins={pool.bulletins}
            title={pool.title}
            moderatorName={pool.moderatorName}
            buyIn={pool.buyIn}
          />
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
  user: PropTypes.shape({
    id: PropTypes.shape()
  }),
  pool: PropTypes.shape({
    messages: PropTypes.shape(),
    bulletins: PropTypes.shape(),
    standings: PropTypes.shape(),
    members: PropTypes.shape(),
    paymentMade: PropTypes.bool.isRequired,
    moderatorId: PropTypes.string.isRequired,
    id: PropTypes.shape()
  }).isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired,
  fetchBulletins: PropTypes.func.isRequired
};

export default withRouter(PoolHome);
