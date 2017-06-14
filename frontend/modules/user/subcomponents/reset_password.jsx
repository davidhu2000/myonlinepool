import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

import { PasswordInput, PasswordConfirmation } from 'common/components';

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      passwordConfirmation: '',
      email: props.email
    };

    autoBind(this);
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="auth-form">

        <PasswordInput context={this} password={this.state.password} />

        <PasswordConfirmation
          context={this}
          password={this.state.password}
          passwordConfirmation={this.state.passwordConfirmation}
        />

        <div className="submit-row">
          <div className="reroute">
            {text}
            <span>
              <Link to={`auth?form=${otherLink}`}>{otherForm}</Link>
            </span>
          </div>

          <input
            id="form-submit-button"
            type='submit'
            className="auth-form-button"
            value={submitValue}
            onMouseEnter={this.isFormValid}
            disabled={!this.state.isValid}
          />

        </div>
      </form>
    );
  }
}

ResetPassword.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
};

export { ResetPassword };
