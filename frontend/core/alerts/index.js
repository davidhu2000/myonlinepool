import { connect } from 'react-redux';

import { removeError } from 'common/actions';

import Errors from './component';

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  removeError: error => dispatch(removeError(error))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Errors);
