import { connect } from 'react-redux';
import Splash from './component';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
