import { connect } from 'react-redux';

import { toggleConfirmFormModal, toggleJoinFormModal } from 'common/actions';

import App from './app';
import { removeMember } from './actions';

const mapStateToProps = ({ user, modal }) => ({
  loggedIn: Boolean(user),
  modal
});

const mapDispatchToProps = dispatch => ({
  removeMember: (userId, poolId) => dispatch(removeMember(userId, poolId)),
  toggleConfirmFormModal: () => dispatch(toggleConfirmFormModal()),
  toggleJoinFormModal: () => dispatch(toggleJoinFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
