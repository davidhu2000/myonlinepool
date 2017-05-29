import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatBoxItem from './chat_box_item';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
  }

  genList() {
    let chat = this.props.Chat;
    return chat.map( msg => (
      <ChatBoxItem
        Message={msg}
        />
    ));
  }

  render() {
    return (
      <div className="chat-box">
        <h2>Chat</h2>
        {this.genList()}
      </div>
    );
  }
}

export default ChatBox;
