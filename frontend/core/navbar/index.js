import { connect } from 'react-redux';
import { signout } from 'modules/auth/actions';
import { removeMember } from './subcomponents/actions';
import Navbar from './navbar';

const mapStateToProps = ({ user, pool }) => ({
  user,
  pool,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout()),
  removeMember: (userId, poolId) => dispatch(removeMember(userId, poolId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
