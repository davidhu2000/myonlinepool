import { connect } from 'react-redux';
import { signin, signup, confirmEmail } from './actions';

import SignUp from './component';

const mapStateToProps = ({ user }) => ({
  user,
  loggedIn: Boolean(user)
});

const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user)),
  signup: user => dispatch(signup(user)),
  confirmEmail: (email, token) => dispatch(confirmEmail(email, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
