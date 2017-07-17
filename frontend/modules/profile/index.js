import { connect } from 'react-redux';
import Profile from './component';

import { changeEmail, changeUsername } from './actions';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  changeEmail: email => dispatch(changeEmail(email)),
  changeUsername: username => dispatch(changeUsername(username))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
