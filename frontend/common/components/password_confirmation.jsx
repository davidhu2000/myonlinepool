import React from 'react';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

const PasswordConfirmation = ({ password, passwordConfirmation, update }) => (
  <FormTextInput
    update={update}
    value={passwordConfirmation}
    password={password}
    type="password"
    field="passwordConfirmation"
    label="Password Confirmation"
    errorMessage="Password confirmation does not match password."
  />
);

PasswordConfirmation.propTypes = {
  update: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired
};

export { PasswordConfirmation };
