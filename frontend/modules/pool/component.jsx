import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PropTypes from 'prop-types';

class Pool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    let { poolId } = this.props.params;

    this.props.fetchPoolInformation(poolId).then(
      () => {
        let { pool, user } = this.props;
        if (Object.keys(pool.members).includes(`${user.id}`)) {
          this.setState({ loading: false });
        } else {
          hashHistory.replace('/home');
        }
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <div></div>
      );
    }

    return (
      <div className="pool-container">
        { this.props.children }
      </div>
    );
  }
}

Pool.propTypes = {
  params: PropTypes.shape({
    poolId: PropTypes.string.isRequired
  }).isRequired,
  fetchPoolInformation: PropTypes.func.isRequired,
  pool: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired
};

export default withRouter(Pool);
