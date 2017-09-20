import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Picksview from './component';


const mapStateToProps = state => ({
  picks: state.picks.allPicks,
  members: state.pool.members,
  standings: state.pool.standings
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Picksview));
