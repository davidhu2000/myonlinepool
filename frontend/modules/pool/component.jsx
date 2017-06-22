import React from 'react';
import { withRouter } from 'react-router';
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
      () => this.setState({ loading: false })
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
  fetchPoolInformation: PropTypes.func.isRequired
};

export default withRouter(Pool);
