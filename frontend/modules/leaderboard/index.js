import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Leaderboard from './component';


const mapStateToProps = state => ({
  pool: state.pool
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Leaderboard));
