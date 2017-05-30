import React from 'react';
import { Link, withRouter } from 'react-router';
import ChatBoxItem from './chat_box_item';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ""
    }

    this.submitPost = this.submitPost.bind(this);
  }

  submitPost(e) {
    e.preventDefault();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
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
        <div className="message-container-container">
          <div className="message-container">
            {this.genList()}
          </div>
        </div>
        <form onSubmit={ this.submitPost } className="chat-form">
          <input  name="post"
                  value={ this.state.post }
                  onChange={ this.update("post") }
                  className="chat-input"></input>
          <input type='submit'
                 className="chat-form-button"
                 value="submit"></input>
        </form>
      </div>
    );
  }
}

export default ChatBox;
