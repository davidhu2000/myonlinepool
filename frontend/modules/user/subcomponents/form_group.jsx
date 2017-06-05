import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ update, type, value, label  }) => (
  <div className="authform-group">
    <input
      required
      name={type}
      type={type === 'password' ? 'password' : 'text'}
      value={value}
      onChange={update(type)}
      className="auth-form-password"
    />
    <span className="bar" />
    <label htmlFor={type}>{label}</label>
  </div>
);

FormGroup.propTypes = {
  update: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export { FormGroup };
