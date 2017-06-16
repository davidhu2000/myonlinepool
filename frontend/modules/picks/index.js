import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Picks from './component';


const mapStateToProps = state => ({
  games: state.games,
  picks: state.picks
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Picks));
