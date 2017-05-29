import React from 'react';
import { Link, withRouter } from 'react-router';

const ChatBoxItem = props => {

  return (
    <div className="chat-box-item">
      <p>
        {props.Message}
      </p>
    </div>
  );
};

export default ChatBoxItem;
