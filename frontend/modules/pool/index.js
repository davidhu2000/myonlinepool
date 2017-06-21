import { connect } from 'react-redux';
import Pool from './component';
import { fetchMessages, createMessage, fetchBulletins } from './actions';

const mapStateToProps = ({ pool }) => ({
  pool
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: (poolId, offset) => dispatch(fetchMessages(poolId, offset)),
  fetchBulletins: (poolId, offset) => dispatch(fetchBulletins(poolId, offset)),
  createMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);
