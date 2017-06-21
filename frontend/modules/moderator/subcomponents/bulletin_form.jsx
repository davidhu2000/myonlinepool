import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class BulletinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletin: ""
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
    let bulletin = {
      pool_id: this.props.poolId,
      body: this.state.bulletin
    };
    this.props.createBulletin(bulletin).then(
      () => this.setState({ bulletin: '' })
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="chat-form">

        <FormTextInput
          update={this.update}
          type='text'
          value={this.state.bulletin}
          label=""
          field="bulletin"
          errorMessage="Please enter a message"
        />

        <div className="chat-form-button-row">
          <input type='submit' className="chat-form-button" value="Create bulletin" />
        </div>
      </form>
    );
  }
}

BulletinForm.propTypes = {
  poolId: PropTypes.number.isRequired,
  createBulletin: PropTypes.func.isRequired
};

export { BulletinForm };
