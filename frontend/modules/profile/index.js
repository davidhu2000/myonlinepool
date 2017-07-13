import { connect } from 'react-redux';
import Profile from './component';

import * as Actions from './actions';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
