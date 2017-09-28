import { connect } from 'react-redux';
import { toggleJoinFormModal } from 'common/actions';

import Home from './component';
import {
  fetchMyPools,
  fetchAnnouncements,
  fetchSiteStandings
} from './actions';

const mapStateToProps = state => ({
  home: state.home,
  user: state.user,
  prefs: state.prefs
});

const mapDispatchToProps = dispatch => ({
  fetchMyPools: () => dispatch(fetchMyPools()),
  fetchAnnouncements: () => dispatch(fetchAnnouncements()),
  toggleJoinFormModal: () => dispatch(toggleJoinFormModal()),
  fetchSiteStandings: () => dispatch(fetchSiteStandings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
