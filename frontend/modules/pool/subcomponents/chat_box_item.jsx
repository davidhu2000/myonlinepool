import React from 'react';
import PropTypes from 'prop-types';

import { timeFromNow } from 'helpers';

const ChatBoxItem = ({ message }) => {
  let messageTime = timeFromNow(Date.parse(message.createdAt));
  let red = (message.authorId * 1234) % 150 + 1;
  let green = (message.authorId * 4321) % 150 + 1;
  let blue = (message.authorId * 2314) % 150 + 1;
  let color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="chat-box-item">
      <div className="message-picture">
        <span style={{ backgroundColor: color }} />
      </div>
      <div className="message-data">
        <div className="message-info">
          <div className="message-author">{message.author}</div>
          <div className="message-time">{messageTime}</div>
        </div>
        <div className="message-body">{message.body}</div>
      </div>
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
