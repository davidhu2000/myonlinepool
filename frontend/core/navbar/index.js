import { connect } from 'react-redux';
import { toggleConfirmFormModal } from 'common/actions';

import { signout } from 'modules/auth/actions';

import Navbar from './navbar';

const mapStateToProps = ({ user, pool }) => ({
  user,
  pool,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  toggleConfirmFormModal: () => dispatch(toggleConfirmFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
