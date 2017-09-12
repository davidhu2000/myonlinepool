import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';
import { MoonLoader } from 'react-spinners';

class Pool extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    autoBind(this);
  }

  componentWillMount() {
    let { poolId } = this.props.params;

    this.props.clearPoolInformation();
    let startTime = Date.now();

    this.props.fetchPoolInformation(poolId).then(
      () => setTimeout(() => this.setState({ loading: false }), 200 - (Date.now() - startTime))
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
        <div className="loader-container">
          <MoonLoader color={'#2d2d2d'} size={50} />
        </div>
      );
    }

    return (
      <div className="pool-root">
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
  clearPoolInformation: PropTypes.func.isRequired
};

export default withRouter(Pool);
