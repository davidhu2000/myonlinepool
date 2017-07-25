import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class BuyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buy_in: ""
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
    this.props.updateBuyin(this.state.buy_in, this.props.poolId);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="buy-form">

        <FormTextInput
          update={this.update}
          type='number'
          value={this.state.buy_in}
          label="Update Pool Buy-in"
          field="buy_in"
          errorMessage="Please enter a price"
        />

        <div className="buy-form-button-row">
          <input type='submit' className="button buy-form-button" value="Update" />
        </div>
      </form>
    );
  }
}

export { BuyForm };
