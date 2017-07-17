import React from 'react';
import PropTypes from 'prop-types';

const BulletinBoxItem = ({ bulletin }) => {
  return (
    <div className="bulletin-item">
      <div className="author">Admin</div>
      <div className="message">{bulletin.body}</div>
    </div>
  );
};

BulletinBoxItem.propTypes = {
  bulletin: PropTypes.shape().isRequired
};

export { BulletinBoxItem };
