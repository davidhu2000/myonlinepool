import React from 'react';
import { Link, withRouter } from 'react-router';

const ChatBoxItem = props => {

  return (
    <div className="chat-box-item">
        <span>{props.Name}</span>: {props.Message}
    </div>
  );
};

export { ChatBoxItem };
