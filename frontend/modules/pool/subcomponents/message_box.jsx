import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { MessageBoxItem, MessageForm } from './';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };

    autoBind(this);
  }

  renderMessages() {
    let { messages } = this.props;
    let messageIds = Object.keys(messages).reverse();

    return messageIds.map(id => (
      <MessageBoxItem key={`message-${id}`} message={messages[id]} />
    ));
  }

  render() {

    let { messages, poolId, createMessage } = this.props;
    let numberMessages = Object.keys(messages).length;
    return (
      <div className="chat-box">
        <h2>Message Board</h2>

        <MessageForm poolId={poolId} createMessage={createMessage} />

        <div className="message-container-container">
          <div className="message-container">
            {this.renderMessages()}
          </div>
        </div>

        { numberMessages > 0 && numberMessages % 20 === 0 && (
          <button
            className='messages-load-more-button'
            onClick={() => this.props.fetchMessages(poolId, numberMessages)}
          >
            Load more
          </button>
        )}

      </div>
    );
  }
}

// update propTypes for messages
MessageBox.propTypes = {
  messages: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  createMessage: PropTypes.func.isRequired,
  fetchMessages: PropTypes.func.isRequired
};

export { MessageBox };
