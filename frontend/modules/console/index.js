import { connect } from 'react-redux';
import AdminConsole from './component';
import { fetchGames, updatePrefs } from './actions';

const mapStateToProps = state => ({
  userId: state.user.id,
  games: state.games,
  prefs: state.prefs
});

const mapDispatchToProps = dispatch => ({
  fetchGames: week => dispatch(fetchGames(week)),
  updatePrefs: prefs => dispatch(updatePrefs(prefs))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminConsole);
