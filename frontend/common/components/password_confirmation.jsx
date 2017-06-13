import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { FormTextInput } from 'common/components';

class PasswordConfirmation extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  update(field) {
    return e => {
      this.props.context.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <FormTextInput
        update={this.update}
        value={this.props.passwordConfirmation}
        password={this.props.password}
        type="password"
        field="passwordConfirmation"
        label="Password Confirmation"
        errorMessage="Password confirmation does not match password."
      />
    );
  }
}

PasswordConfirmation.propTypes = {
  context: PropTypes.shape().isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired
};

export { PasswordConfirmation };
