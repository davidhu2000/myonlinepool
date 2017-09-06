import { connect } from 'react-redux';
import Pricing from './component';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pricing);
