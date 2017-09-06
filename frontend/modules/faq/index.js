import { connect } from 'react-redux';
import Faq from './component';

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Faq);
