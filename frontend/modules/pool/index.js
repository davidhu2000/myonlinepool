import { connect } from 'react-redux';
import Pool from './component';
import * as Actions from './actions';

const mapStateToProps = ({ pool, user }) => ({
  pool,
  user
});

const mapDispatchToProps = dispatch => ({
  fetchPoolInformation: poolId => dispatch(Actions.fetchPoolInformation(poolId)),
  clearPoolInformation: () => dispatch(Actions.clearPoolInformation())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);
