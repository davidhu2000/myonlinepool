import { connect } from 'react-redux';
import PoolForm from './component';
import { createPool } from './actions';

const mapStateToProps = (state, ownProps) => ({
  pool: state.pool
});
const mapDispatchToProps = dispatch => ({
  createPool: pool => dispatch(createPool(pool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PoolForm);
