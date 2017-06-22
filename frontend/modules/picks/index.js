import { connect } from 'react-redux';
import { sendPicks, fetchPicks, sendPick } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  games: state.games,
  picks: state.picks,
  poolId: state.pool.id,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  sendPicks: (week, poolId, type) => dispatch(sendPicks(week, poolId, type)),
  fetchPicks: (week, poolId) => dispatch(fetchPicks(week, poolId)),
  sendPick: (pick, type) => dispatch(sendPick(pick, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
