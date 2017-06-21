import { connect } from 'react-redux';
import { sendPicks, fetchPicks } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  games: state.games,
  picks: state.picks,
  poolId: state.pool.id,
  userId: state.user.id
});

const mapDispatchToProps = dispatch => ({
  sendPicks: (week, poolId) => dispatch(sendPicks(week, poolId)),
  fetchPicks: (week, poolId) => dispatch(fetchPicks(week, poolId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
