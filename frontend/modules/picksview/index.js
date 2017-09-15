import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Picksview from './component';


const mapStateToProps = state => ({
  picks: state.pool.picks
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Picksview));
