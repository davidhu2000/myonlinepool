import { connect } from 'react-redux';
import { signin, signup, confirmEmail, resetPassword } from './actions';

import SignUp from './component';

const mapStateToProps = ({ user }) => ({
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  confirmEmail: (email, token) => dispatch(confirmEmail(email, token)),
  resetPassword: user => dispatch(resetPassword(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
