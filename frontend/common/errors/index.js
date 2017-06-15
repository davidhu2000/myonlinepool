import { connect } from 'react-redux';
import Errors from './component';

import { removeError } from './actions';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  removeError: id => dispatch(removeError(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors);
