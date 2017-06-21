import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { BulletinForm } from './subcomponents';

class Moderator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { pool, user } = this.props;
    this._redirectUnlessModerator(user.id, pool.moderatorId, pool.id);
  }

  componentWillReceiveProps(newProps) {
    let { pool, user } = newProps;
    this._redirectUnlessModerator(user.id, pool.moderatorId, pool.id);
  }

  _redirectUnlessModerator(userId, moderatorId, poolId) {
    if (userId !== moderatorId) {
      this.props.router.push(`pool/${poolId}`);
    }
  }

  renderMembers() {
    
  }

  render() {
    return (
      <div className="moderator-container">
        <BulletinForm
          createBulletin={this.props.createBulletin}
          poolId={this.props.pool.id}
        />

        Moderator

        - create bulletins
        - remove users
      </div>
    );
  }
}

Moderator.propTypes = {
  createBulletin: PropTypes.func.isRequired,
  pool: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired
};

export default withRouter(Moderator);
