import React from 'react';
import PropTypes from 'prop-types';

import { timeFromNow, hashString } from 'helpers';

const MessageBoxItem = ({ message }) => {
  let messageTime = timeFromNow(Date.parse(message.createdAt));
  let nameHash = hashString(message.author);

  let red = (nameHash * 1234) % 150 + 1;
  let green = (nameHash * 4321) % 150 + 1;
  let blue = (nameHash * 2314) % 150 + 1;
  let color = `rgb(${red}, ${green}, ${blue})`;

  return (
    <div className="chat-box-item">
      <div className="chat-picture">
        <span style={{ backgroundColor: color }}>{message.author[0]}</span>
      </div>
      <div className="chat-data">
        <div className="chat-info">
          <div className="chat-author">{message.author}</div>
          <div className="chat-time">{messageTime}</div>
        </div>
        <div className="chat-body">{message.body}</div>
      </div>
    </div>
  );
};

MessageBoxItem.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
  }).isRequired
};

export { MessageBoxItem };
