import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class PoolListItem extends React.Component {

  render() {
    return (
    <div className="pool-list-item">
      <i className="fa fa-caret-right" aria-hidden="true" />
      <Link to={`/pool/${this.props.id}`}>
        <div>
          {this.props.title}
        </div>
      </Link>
    </div>
    );
  }
}

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
