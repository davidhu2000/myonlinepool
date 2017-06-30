import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import PropTypes from 'prop-types';

// TODO: render buy_in
// TODO: render unique pool identifier
class Pool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    let { poolId } = this.props.params;

    this.props.clearPoolInformation();

    this.props.fetchPoolInformation(poolId).then(
      () => this.setState({ loading: false })
    );
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.poolId !== newProps.params.poolId) {
      this.setState({ loading: true });
      newProps.clearPoolInformation();
      newProps.fetchPoolInformation(newProps.params.poolId).then(
        () => this.setState({ loading: false })
      );
    }
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
  clearPoolInformation: PropTypes.func.isRequired,
  pool: PropTypes.shape().isRequired,
  user: PropTypes.shape().isRequired
};

export default withRouter(Pool);
