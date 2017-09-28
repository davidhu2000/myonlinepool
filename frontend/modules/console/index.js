import { processMessages } from 'helpers';
import { receiveAlerts } from 'common/actions';
import { connect } from 'react-redux';
import { fetchPrefs } from 'core/app/actions';
import AdminConsole from './component';
import { fetchGames, updatePrefs } from './actions';

const mapStateToProps = state => ({
  userId: state.user.id,
  games: state.games,
  prefs: state.prefs
});

const mapDispatchToProps = dispatch => ({
  fetchGames: week => dispatch(fetchGames(week)),
  updatePrefs: prefs => dispatch(updatePrefs(prefs)),
  receiveAlerts: (alert, code) => dispatch(receiveAlerts(processMessages(alert, code))),
  fetchPrefs: () => dispatch(fetchPrefs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminConsole);
