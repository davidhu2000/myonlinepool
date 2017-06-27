import { connect } from 'react-redux';
import GameForm from './component';

const mapStateToProps = state => ({
  games: state.games
});

const mapDispatchToProps = () => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameForm);
