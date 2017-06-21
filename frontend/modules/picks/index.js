import { connect } from 'react-redux';
import { sendPicks } from './actions';
import Picks from './component';

const mapStateToProps = state => ({
  games: state.games,
  picks: state.picks
});

const mapDispatchToProps = dispatch => ({
  sendPicks: picks => dispatch(sendPicks(picks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picks);
