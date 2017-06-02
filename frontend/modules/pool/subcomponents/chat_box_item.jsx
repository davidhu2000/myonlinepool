import React from 'react';
import { Link, withRouter } from 'react-router';

const ChatBoxItem = props => {

  return (
    <div className="chat-box-item">
      <div className="author">{props.Name}</div>
      <div className="message">{props.Message}</div>
    </div>
  );
};

export { ChatBoxItem };
