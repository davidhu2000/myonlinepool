import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PoolListItem = ({ title, id }) => {

  return (
    <div className="pool-list-item">
      <button>
        <i className="fa fa-times" aria-hidden="true" />
      </button>  
    
        <Link to={`/pool/${id}`}>
          <div>
          {title}
          </div>
        </Link>
    
    </div>
  );
};

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
