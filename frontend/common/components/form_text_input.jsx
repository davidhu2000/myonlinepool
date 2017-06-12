import React from 'react';
import PropTypes from 'prop-types';

import { withValidation } from 'helpers';

const TextInput = ({ update, type, value, label, field, isValid, validate }) => (
  <div className={`poolform-group ${isValid ? '' : 'form-has-error'}`}>
    <input
      required
      name={type}
      type={type}
      value={value}
      onChange={update(field)}
      className="auth-form-password"
      onBlur={validate}
    />
    { console.log(field + ': ' + isValid)}
    <span className="bar" />
    <label htmlFor={type}>{label}</label>
    <div className={`form-group-error-message ${isValid ? 'hidden' : ''}`}>
      Error
    </div>
  </div>
);

TextInput.propTypes = {
  update: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  validate: PropTypes.func.isRequired
};

TextInput.defaultProps = {
  isValid: null
};

export const FormTextInput = withValidation(TextInput);
