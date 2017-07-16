import { connect } from 'react-redux';
import Payment from './component';

const mapStateToProps = ({ pool, user }) => ({
  pool,
  user
});

export default connect(
  mapStateToProps,
  null
)(Payment);
