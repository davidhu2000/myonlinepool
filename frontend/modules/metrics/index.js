import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchTeams } from './actions';
import Metrics from './component';


const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Metrics));
