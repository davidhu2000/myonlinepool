import { connect } from 'react-redux';
import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import Pool from './component';
import * as Actions from './actions';

const mapStateToProps = ({ user, pool }) => ({
  pool,
  user
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (poolId, offset) => dispatch(Actions.fetchMessages(poolId, offset)),
  fetchBulletins: (poolId, offset) => dispatch(Actions.fetchBulletins(poolId, offset)),
  createMessage: message => dispatch(Actions.createMessage(message)),
  sendInvite: data => dispatch(Actions.sendInvite(data)),
  receiveAlerts: (alert, code) => dispatch(receiveAlerts(processMessages(alert, code)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);
