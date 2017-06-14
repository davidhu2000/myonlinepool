import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { FormTextInput } from 'common/components';

class PasswordInput extends React.Component {
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
        value={this.props.password}
        type="password"
        field="password"
        label="Password"
        errorMessage="Password needs to be at least 6 characters"
      />
    );
  }
}

PasswordInput.propTypes = {
  context: PropTypes.shape().isRequired,
  password: PropTypes.string.isRequired
};

export { PasswordInput };
