/* global document */
import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { Link, hashHistory } from 'react-router';
import { ScaleLoader } from 'react-spinners';

import { EmailInput, PasswordInput } from 'common/components';

class SigninForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isValid: false,
      loading: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();
    let start = Date.now();
    this.setState({ loading: true });
    this.props.signin(this.state).then(
      () => hashHistory.push('/home'),
      () => setTimeout(() => this.setState({ loading: false }), 200 - (Date.now() - start))
    );
  }

  isFormValid() {
    let inputs = [];

    inputs.push(this.state.email, this.state.password);

    let noEmptyFields = inputs.every(val => !!val);
    let noError = document.getElementsByClassName('form-group-error-message').length === 0;
    this.setState({ isValid: noEmptyFields && noError });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  renderUtility() {
    return (
      <div className="utility-row">
        <Link to='auth?form=forget-password'>
          Forgot your password?
        </Link>
      </div>
    );
  }

  render() {
    let submitValue = 'Sign In';
    let otherForm = 'Sign up';
    let otherLink = 'signup';
    let text = 'Don\'t have an account?';

    return (
      <form onSubmit={this.submitForm} className="auth-form">

        <EmailInput update={this.update} email={this.state.email} />

        <PasswordInput update={this.update} password={this.state.password} />

        <div className="submit-row">
          <div className="reroute">
            {text}
            <span>
              <Link to={`auth?form=${otherLink}`}>{otherForm}</Link>
            </span>
          </div>

          <button
            id="form-submit-button"
            type='submit'
          >
            <div className='button auth-form-button'>
              {submitValue}
            </div>
          </button>

          { this.state.loading && (
            <div className='loader'><ScaleLoader height={25} width={2} /></div>
          ) }
        </div>
        { this.renderUtility() }
      </form>
    );
  }
}

SigninForm.propTypes = {
  signin: PropTypes.func.isRequired
};

export { SigninForm };
