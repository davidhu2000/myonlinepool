import { connect } from 'react-redux';

import Home from './component';
import { fetchMyPools, joinPool } from './actions';

const mapStateToProps = ({ home }) => ({
  home
});

const mapDispatchToProps = dispatch => ({
  fetchMyPools: () => dispatch(fetchMyPools()),
  joinPool: (identifier, password) => dispatch(joinPool(identifier, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
