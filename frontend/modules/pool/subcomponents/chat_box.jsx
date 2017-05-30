import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatBoxItem from './chat_box_item';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ""
    }
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
        <div className="chat-form">
          <input className="chat-input">
          </input>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default ChatBox;
