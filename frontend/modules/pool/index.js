import { connect } from 'react-redux';
import Pool from './component';
import { fetchMessages } from './actions';

const mapStateToProps = ({ pool }) => ({
  pool
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: poolId => dispatch(fetchMessages(poolId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);
