import { connect } from 'react-redux';

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
  fetchAnnouncements: () => dispatch(fetchAnnouncements())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
