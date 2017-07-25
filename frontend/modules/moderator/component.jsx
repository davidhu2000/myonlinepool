import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

import { BulletinForm, MemberItem, NameForm, BuyForm } from './subcomponents';

class Moderator extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
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
    let { members } = this.props.pool;
    let realMembers = [];
    Object.keys(members).forEach(key => {
      if (members[key].userId !== this.props.pool.moderatorId) {
        realMembers.push(members[key]);
      }
    });

    return realMembers.map(member => (
      <MemberItem
        member={member}
        toggleMembership={this.props.toggleMembership}
        removeMember={this.props.removeMember}
        pool={this.props.pool}
      />
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
        <div className="moderator-name-form">
          <NameForm
            updateName={this.props.updateName}
            poolId={Number(this.props.params.poolId)}
          />
        </div>
        <div className="moderator-buy-form">
          <BuyForm 
            updateBuyin={this.props.updateBuyin}
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
