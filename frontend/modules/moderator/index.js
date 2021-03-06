import { connect } from 'react-redux';
import Moderator from './component';

import * as Actions from './actions';

const mapStateToProps = ({ pool, user }) => ({
  pool,
  user
});

const mapDispatchToProps = dispatch => ({
  createBulletin: bulletin => dispatch(Actions.createBulletin(bulletin)),
  removeMember: (userId, poolId) => dispatch(Actions.removeMember(userId, poolId)),
  deleteBulletin: poolId => dispatch(Actions.deleteBulletin(poolId)),
  toggleMembership:
    (membershipId, poolId) => dispatch(Actions.toggleMembership(membershipId, poolId)),
  updateName: (name, poolId) => dispatch(Actions.updateName(name, poolId)),
  updateBuyin: (buyin, poolId) => dispatch(Actions.updateBuyin(buyin, poolId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moderator);
