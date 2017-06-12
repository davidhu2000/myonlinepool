import React from 'react';
import PropTypes from 'prop-types';

import { withValidation } from 'helpers';

const FormTextInput = ({ update, type, value, label, field }) => (
  <div className="poolform-group">
    <input
      required
      name={type}
      type={type}
      value={value}
      onChange={update(field)}
      className="auth-form-password"
    />
    <span className="bar" />
    <label htmlFor={type}>{label}</label>
  </div>
);

FormTextInput.propTypes = {
  update: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired
};

export { FormTextInput };
