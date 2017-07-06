import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

import { MessageBoxItem, MessageForm } from './';

class MessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  fetchMessages(poolId, numberMessages) {
    this.setState({ loading: true });

    setTimeout(() => this.props.fetchMessages(poolId, numberMessages).then(
      () => this.setState({ loading: false })
    ), 200);
  }

  renderButton() {
    let { poolId, messages, type } = this.props;
    let numberMessages = Object.keys(messages).length;

    if (numberMessages > 0 && numberMessages % 20 === 0) {
      if (this.state.loading) {
        return (
          <div style={{ marginLeft: 53 }}>
            <PulseLoader size={10} color={'#2d2d2d'} />
          </div>
        );
      } else {
        return (
          <button
            className={`${type}-load-more-button`}
            onClick={() => this.fetchMessages(poolId, numberMessages)}
          >
            Load more
          </button>
        );
      }
    }
  }

  renderMessages() {
    let { messages, type } = this.props;
    let messageIds = Object.keys(messages).reverse();

    return messageIds.map(id => (
      <MessageBoxItem key={`${type}-${id}`} message={messages[id]} />
    ));
  }

  render() {
    let { poolId, createMessage, type } = this.props;
    return (
      <div className={`${type}-box`}>
        <h2>Message Board</h2>

        <MessageForm poolId={poolId} createMessage={createMessage} />

        <div className={`${type}-container-container`}>
          <div className={`${type}-container`}>
            {this.renderMessages()}
          </div>
        </div>

        { this.renderButton() }

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
