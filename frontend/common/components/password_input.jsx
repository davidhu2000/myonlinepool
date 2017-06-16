import React from 'react';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

const PasswordInput = ({ password, update }) => (
  <FormTextInput
    update={update}
    value={password}
    type="password"
    field="password"
    label="Password"
    errorMessage="Password needs to be at least 6 characters"
  />
);

PasswordInput.propTypes = {
  update: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired
};

export { PasswordInput };
