import { connect } from 'react-redux';

import { toggleConfirmFormModal, toggleJoinFormModal } from 'common/actions';

import { joinPool } from 'modules/home/actions';

import { fetchPrefs } from 'core/app/actions';

import App from './app';
import { removeMember } from './actions';

const mapStateToProps = ({ user, modals }) => ({
  loggedIn: Boolean(user),
  user,
  modals
});

const mapDispatchToProps = dispatch => ({
  removeMember: (userId, poolId) => dispatch(removeMember(userId, poolId)),
  joinPool: (identifier, password) => dispatch(joinPool(identifier, password)),
  toggleConfirmFormModal: () => dispatch(toggleConfirmFormModal()),
  toggleJoinFormModal: () => dispatch(toggleJoinFormModal()),
  fetchPrefs: () => dispatch(fetchPrefs())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
