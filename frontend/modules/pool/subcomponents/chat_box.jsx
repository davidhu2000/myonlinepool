import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { ChatBoxItem } from './';

class ChatBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };

    autoBind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let message = {
      pool_id: this.props.poolId,
      body: this.state.message
    };
    this.props.createMessage(message).then(
      () => this.setState({ message: '' })
    );
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
    let { messages, poolId } = this.props;
    let numberMessages = Object.keys(messages).length;

    console.log(numberMessages)

    return (
      <div className="chat-box">
        <h2>Message Board</h2>
        <form onSubmit={this.handleSubmit} className="chat-form">
          <div className='poolform-group' style={{ marginBottom: 0 }}>
            <input
              name="message"
              value={this.state.message}
              onChange={this.update("message")}
              className="chat-input"
            />
            <span className={`bar`} />
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

        <button
          className='messages-load-more-button'
          onClick={() => this.props.fetchMessages(poolId, numberMessages)}
        >
          Load more
        </button>

      </div>
    );
  }
}

// update propTypes for messages
ChatBox.propTypes = {
  messages: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired
};

export { ChatBox };
