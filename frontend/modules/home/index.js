import { connect } from 'react-redux';

import Home from './component';
import { fetchMyPools } from './actions';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  fetchMyPools: () => dispatch(fetchMyPools())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
