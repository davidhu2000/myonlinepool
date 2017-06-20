import React from 'react';
import { Link, withRouter } from 'react-router';
import { ChatBoxItem } from './chat_box_item';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ""
    }

    // this.submitPost = this.submitPost.bind(this);
    // this.sendMessage = this.props.Dispatch.bind(this);
  }

  submitPost(e) {
    e.preventDefault();
    this.sendMessage({name:"alex", message:"hi"});
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  genList() {
    // let chat = this.props.Chat;
    // return chat.map( msg => (
    //   <ChatBoxItem
    //     Name={msg.name}
    //     Message={msg.message}
    //     />
    // ));
  }

  render() {
    return (
      <div className="chat-box">
        <h2>Messages</h2>
        <form onSubmit={ this.submitPost } className="chat-form">
          <div>
          <input  name="post"
                  value={ this.state.post }
                  onChange={ this.update("post") }
                  className="chat-input"></input>
          </div>
          <div className="chat-form-button-row">
          <input type='submit'
                 className="chat-form-button"
                 value="submit"></input>
          </div>
        </form>
        <div className="message-container-container">
          <div className="message-container">
            {this.genList()}
          </div>
        </div>

      </div>
    );
  }
}

export { ChatBox };
