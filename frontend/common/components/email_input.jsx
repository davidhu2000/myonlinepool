import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { FormTextInput } from 'common/components';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  update() {
    return e => {
      this.props.context.setState({
        email: e.target.value
      });
    };
  }

  render() {
    let { email } = this.props;
    return (
      <FormTextInput
        update={this.update}
        value={email}
        type="text"
        field="email"
        label="Email"
        errorMessage="Please enter a valid email"
      />
    );
  }
}

EmailInput.propTypes = {
  context: PropTypes.shape().isRequired,
  email: PropTypes.string.isRequired
};

export { EmailInput };
