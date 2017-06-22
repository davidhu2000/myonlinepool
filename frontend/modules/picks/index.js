import { connect } from 'react-redux';
import { sendPicks, fetchPicks, sendPick } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  picks: state.picks,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  sendPicks: pick => dispatch(sendPicks(pick)),
  fetchPicks: (week, poolId) => dispatch(fetchPicks(week, poolId)),
  sendPick: pick => dispatch(sendPick(pick))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
