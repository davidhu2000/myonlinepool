import { connect } from 'react-redux';
import { receiveAlerts } from 'common/actions';
import PaymentConfirmation from './component';

const mapDispatchToProps = dispatch => ({
  receiveAlerts: alert => dispatch(receiveAlerts(alert))
});

export default connect(
  null,
  mapDispatchToProps
)(PaymentConfirmation);
