import { connect } from 'react-redux';
import Moderator from './component';

import * as Actions from './actions';

const mapStateToProps = ({ pool, user }) => ({
  pool,
  user
});

const mapDispatchToProps = dispatch => ({
  createBulletin: bulletin => dispatch(Actions.createBulletin(bulletin)),
  removeMember: (userId, poolId) => dispatch(Actions.removeMember(userId, poolId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Moderator);
