import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { ChatBoxItem } from './';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      post: ""
    };

    autoBind(this);
  }

  submitPost(e) {
    e.preventDefault();
    let message = {
      pool_id: this.props.poolId,
      body: this.state.post
    };
    this.props.createMessage(message);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderMessages() {
    let { messages } = this.props;
    let messageIds = Object.keys(messages).reverse();
    return messageIds.map(id => (
      <ChatBoxItem key={`message-${id}`} message={messages[id]} />
    ));
  }

  render() {
    return (
      <div className="chat-box">
        <h2>Message Board</h2>
        <form onSubmit={this.submitPost} className="chat-form">
          <div>
            <input
              name="post"
              value={this.state.post}
              onChange={this.update("post")}
              className="chat-input"
            />
          </div>
          <div className="chat-form-button-row">
            <input type='submit' className="chat-form-button" value="submit" />
          </div>
        </form>
        <div className="message-container-container">
          <div className="message-container">
            {this.renderMessages()}
          </div>
        </div>

      </div>
    );
  }
}

// update propTypes for messages
ChatBox.propTypes = {
  messages: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  createMessage: PropTypes.func.isRequired
};

export { ChatBox };
