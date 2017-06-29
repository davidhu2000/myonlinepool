import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PoolListItem extends React.Component {

  render() {
    return (
      <Link to={`/pool/${this.props.id}`}>
        <div className="pool-list-item">
          <i className="fa fa-angle-right" aria-hidden="true" />
          {this.props.title}
        </div>
      </Link>
    );
  }
}

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
