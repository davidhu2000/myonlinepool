import { connect } from 'react-redux';

import { removeAlert } from 'common/actions';

import Alerts from './component';

const mapStateToProps = ({ alerts }) => ({
  alerts
});

const mapDispatchToProps = dispatch => ({
  removeAlert: alert => dispatch(removeAlert(alert))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alerts);
