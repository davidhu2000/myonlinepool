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
    let { messages, type } = this.props;
    let messageIds = Object.keys(messages).reverse();

    return messageIds.map(id => (
      <MessageBoxItem key={`${type}-${id}`} message={messages[id]} />
    ));
  }

  render() {
    let { messages, poolId, createMessage, type } = this.props;
    let numberMessages = Object.keys(messages).length;
    return (
      <div className={`${type}-box`}>
        <h2>Message Board</h2>

        <MessageForm poolId={poolId} createMessage={createMessage} />

        <div className={`${type}-container-container`}>
          <div className={`${type}-container`}>
            {this.renderMessages()}
          </div>
        </div>

        { numberMessages > 0 && numberMessages % 20 === 0 && (
          <button
            className={`${type}-load-more-button`}
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
  type: PropTypes.string.isRequired,
  messages: PropTypes.shape().isRequired,
  poolId: PropTypes.string.isRequired,
  createMessage: PropTypes.func,
  fetchMessages: PropTypes.func
};

MessageBox.defaultProps = {
  createMessage: null,
  fetchMessages: null
};

export { MessageBox };
