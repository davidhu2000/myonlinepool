import { connect } from 'react-redux';
import Console from './component';
import { fetchGames } from './actions';

const mapStateToProps = state => ({
  userId: state.user.id,
  games: state.games
});

const mapDispatchToProps = dispatch => ({
  fetchGames: week => dispatch(fetchGames(week))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Console);
