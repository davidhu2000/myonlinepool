import { connect } from 'react-redux';
import { updateGame } from './actions';
import GameForm from './component';

const mapStateToProps = state => ({
  games: state.games
});

const mapDispatchToProps = dispatch => ({
  updateGame: game => dispatch(updateGame(game))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameForm);
