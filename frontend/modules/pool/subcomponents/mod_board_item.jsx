import React from 'react';
import PropTypes from 'prop-types';

const ModBoardItem = ({ bulletin }) => {
  return (
    <div className="modboard-item">
      <div className="author">Admin</div>
      <div className="message">{bulletin.body}</div>
    </div>
  );
};

ModBoardItem.propTypes = {
  bulletin: PropTypes.shape().isRequired
};

export { ModBoardItem };
