import { connect } from 'react-redux';
import { showConfirmFormModal } from 'common/actions';

import { signout } from 'modules/auth/actions';

import Navbar from './navbar';

const mapStateToProps = ({ user, pool }) => ({
  user,
  pool,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  showConfirmFormModal: () => dispatch(showConfirmFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
