import { connect } from 'react-redux';
import { signout } from 'modules/user/actions';
import Navbar from './navbar';

const mapStateToProps = ({ user }) => ({
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
