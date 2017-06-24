import { connect } from 'react-redux';
import { toggleJoinFormModal } from 'common/actions';

import Home from './component';
import {
  fetchMyPools,
  joinPool,
  fetchAnnouncements
} from './actions';

const mapStateToProps = ({ home }) => ({
  home
});

const mapDispatchToProps = dispatch => ({
  fetchMyPools: () => dispatch(fetchMyPools()),
  joinPool: (identifier, password) => dispatch(joinPool(identifier, password)),
  fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  toggleJoinFormModal: () => dispatch(toggleJoinFormModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
