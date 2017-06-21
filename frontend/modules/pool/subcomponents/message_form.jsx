import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      focused: false
    };

    autoBind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
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

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="chat-form">

        <FormTextInput
          update={this.update}
          type='text'
          value={this.state.message}
          label=""
          field="message"
          errorMessage="Please enter a message"
        />

        <div className="chat-form-button-row">
          <input type='submit' className="chat-form-button" value="submit" />
        </div>
      </form>
    );
  }
}

MessageForm.propTypes = {
  poolId: PropTypes.string.isRequired,
  createMessage: PropTypes.func.isRequired
};

export { MessageForm };
