import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router';

class Metrics extends React.Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  componentDidMount() {
    this.props.fetchTeams();
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="metrics-container">
      </div>
    );
  }
}

Metrics.propTypes = {
  teams: PropTypes.shape().isRequired,
  fetchTeams: PropTypes.func.isRequired
};

export default withRouter(Metrics);
