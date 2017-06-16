import React from 'react';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

const EmailInput = ({ email, errorMessage, update }) => (
  <FormTextInput
    update={update}
    value={email}
    type="text"
    field="email"
    label="Email"
    errorMessage={errorMessage}
  />
);

EmailInput.propTypes = {
  update: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  errorMessage: PropTypes.string
};

EmailInput.defaultProps = {
  errorMessage: "Please enter a valid email"
};

export { EmailInput };
