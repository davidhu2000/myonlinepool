import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignIn from './component';


const mapStateToProps = ( state ) => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignIn));
