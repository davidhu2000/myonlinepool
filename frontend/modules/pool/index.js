import { connect } from 'react-redux';
import Pool from './component';
import { fetchMessages, createMessage } from './actions';

const mapStateToProps = ({ pool }) => ({
  pool
});

const mapDispatchToProps = dispatch => ({
  fetchMessages: poolId => dispatch(fetchMessages(poolId)),
  createMessage: message => dispatch(createMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pool);
