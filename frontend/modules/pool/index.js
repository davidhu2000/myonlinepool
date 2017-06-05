import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Pool from './component';
import { sendMessage } from './actions';

const mapStateToProps = ( state ) => ({
  pool: state.pool,
  messages: state.messages
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch(sendMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Pool));
