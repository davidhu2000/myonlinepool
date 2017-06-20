import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PoolListItem = ({ title, id }) => {

  return (
    <div className="pool-list-item">
      <Link to={`/pool/${id}`}>
        <i className="fa fa-angle-right"aria-hidden="true" />
        {title}
      </Link>
    </div>
  );
};

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
