import Navbar from './navbar';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  null,
  null
)(withRouter(Navbar));
