import { connect } from 'react-redux';
import { toggleJoinFormModal } from 'common/actions';

import Home from './component';
import {
  fetchMyPools,
  fetchAnnouncements
} from './actions';

const mapStateToProps = ({ home }) => ({
  home
});

const mapDispatchToProps = dispatch => ({
  fetchMyPools: () => dispatch(fetchMyPools()),
  fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  toggleJoinFormModal: () => dispatch(toggleJoinFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
