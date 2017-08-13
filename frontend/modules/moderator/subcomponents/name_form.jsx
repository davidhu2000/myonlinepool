import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
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
    this.props.updateName(this.state.name, this.props.poolId);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="name-form">

        <FormTextInput
          update={this.update}
          type='text'
          value={this.state.name}
          label="Update Pool Name"
          field="name"
          errorMessage="Please enter a pool name"
        />

        <div className="name-form-button-row">
          <input type='submit' className="button name-form-button" value="Update" />
        </div>
      </form>
    );
  }
}

NameForm.propTypes = {
  updateName: PropTypes.func.isRequired,
  poolId: PropTypes.number.isRequired
};

export { NameForm };
