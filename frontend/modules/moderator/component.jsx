import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { BulletinForm } from './subcomponents';

class Moderator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { poolId } = this.props.params;
    let { pool, user } = this.props;
    this._redirectUnlessModerator(user.id, pool.moderatorId, poolId);
  }

  componentWillReceiveProps(newProps) {
    let { poolId } = this.props.params;
    let { pool, user } = newProps;
    this._redirectUnlessModerator(user.id, pool.moderatorId, poolId);
  }

  _redirectUnlessModerator(userId, moderatorId, poolId) {
    if (!moderatorId || !userId || userId !== moderatorId) {
      this.props.router.push(`pool/${poolId}`);
    }
  }

  renderClass(paid) {
    if (paid) {
      return "fa fa-usd red";
    } else {
      return "fa fa-usd green";
    }
  }

  renderMembers() {
    return Object.values(this.props.pool.members || []).map(member => (
      <div className="pool-member">
        <button onClick={() => this.props.toggleMembership(member.id, this.props.pool.id)}>
          <i className={this.renderClass(member.paid)} aria-hidden="true"></i>
        </button>
        <button onClick={() => this.props.removeMember(member.userId, this.props.pool.id)}>
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>    
        <span>{ member.name }</span>
      </div>
    ));
  }

  render() {
    let { identifier, password } = this.props.pool;
    return (
      <div className="moderator-container">
        <div className="moderator-bulletin-form">
          <div className="header">{`Moderator Settings (pool id: ${identifier}, password: ${password})`}</div>
          <BulletinForm
            createBulletin={this.props.createBulletin}
            deleteBulletin={this.props.deleteBulletin}
            poolId={Number(this.props.params.poolId)}
          />
        </div>

        <div className="pool-roster">
          <div className="roster-header">Pool Members</div>
          <div className="moderator-pool-members">
            { this.renderMembers() }
          </div>
        </div>  
      </div>
    );
  }
}

Moderator.propTypes = {
  createBulletin: PropTypes.func.isRequired,
  deleteBulletin: PropTypes.func.isRequired,
  removeMember: PropTypes.func.isRequired,
  toggleMembership: PropTypes.func.isRequired,
  pool: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired,
  params: PropTypes.shape({
    poolId: PropTypes.string
  }).isRequired
};

export default withRouter(Moderator);
