import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatBoxItem from './chat_box_item';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chat-box">
        <p className="chat-box-title">Chat</p>
        <div className="chat-box-top-item">{this.props.Title}</div>
      </div>
    );
  }
}

export default ChatBox;
