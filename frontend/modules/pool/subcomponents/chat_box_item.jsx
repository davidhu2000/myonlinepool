import React from 'react';
import PropTypes from 'prop-types';

const ChatBoxItem = ({ message }) => {
  return (
    <div className="chat-box-item">
      <div className="author">{message.author}</div>
      <div className="message">{message.body}</div>
    </div>
  );
};

ChatBoxItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
};

export { ChatBoxItem };
