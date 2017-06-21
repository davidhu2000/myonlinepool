import { connect } from 'react-redux';
import { sendPicks, fetchPicks } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  games: state.games,
  picks: state.picks
});

const mapDispatchToProps = dispatch => ({
  sendPicks: picks => dispatch(sendPicks(picks)),
  fetchPicks: week => dispatch(fetchPicks(week))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
