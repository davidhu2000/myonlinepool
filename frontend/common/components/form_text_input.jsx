import React from 'react';
import PropTypes from 'prop-types';

import { withValidation } from 'helpers';

const TextInput = ({ update, type, value, label, field, isValid, validate, errorMessage }) => (
  <div className={`poolform-group ${isValid === false ? 'form-has-error' : ''}`}>
    <input
      required
      name={type}
      type={type}
      value={value}
      onChange={update(field)}
      className="auth-form-password"
      onKeyUp={isValid === false ? validate : null}
      onBlur={validate}
    />
    <span className={`bar ${isValid === false ? 'hidden' : ''}`} />
    <label htmlFor={type}>{label}</label>

    { isValid === false && (
      <div className={`form-group-error-message`}>
        {`${errorMessage}`}
      </div>
    ) }
  </div>
);

TextInput.propTypes = {
  update: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
  validate: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired
};

TextInput.defaultProps = {
  isValid: null
};

export const FormTextInput = withValidation(TextInput);
