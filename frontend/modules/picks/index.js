import { connect } from 'react-redux';

import { processMessages } from 'helpers';
import { receiveAlerts } from 'common/actions';
import { sendPicks, fetchPicks, sendPick } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  picks: state.picks,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  sendPicks: pick => dispatch(sendPicks(pick)),
  fetchPicks: (week, poolId) => dispatch(fetchPicks(week, poolId)),
  sendPick: pick => dispatch(sendPick(pick)),
  receiveAlerts: (alert, code) => dispatch(receiveAlerts(processMessages(alert, code)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
