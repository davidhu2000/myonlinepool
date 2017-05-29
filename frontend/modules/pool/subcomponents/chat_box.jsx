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
        Name={msg.name}
        Message={msg.message}
        />
    ));
  }

  render() {
    return (
      <div className="chat-box">
        <h2>Chat</h2>
        <div className="message-container">
          {this.genList()}
        </div>
        <input className="chat-form">
          
        </input>
      </div>
    );
  }
}

export default ChatBox;
