/* global document, $ */
import React from 'react';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';
import { ScaleLoader } from 'react-spinners';

import { EmailInput } from 'common/components';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'me@gmail.com',
      isValid: false,
      loading: false
    };

    autoBind(this);
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
    let message = 'Please check your email to reset your password.';

    let url = {
      pathname: 'auth',
      query: { form: 'message', message }
    };
    let start = Date.now();
    $.ajax({
      method: 'POST',
      url: '/api/auth/passwords',
      data: {
        user: { email: this.state.email }
      }
    }).then(
      () => hashHistory.push(url),
      () => setTimeout(() => this.setState({ loading: false }), 200 - (Date.now() - start))
    );
  }

  isFormValid() {
    let inputs = [];

    inputs.push(
      this.state.email,
    );

    let noEmptyFields = inputs.every(val => !!val);
    let noError = document.getElementsByClassName('form-group-error-message').length === 0;
    this.setState({ isValid: noEmptyFields && noError });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="auth-form">
        <EmailInput update={this.update} email={this.state.email} />
        <div className="submit-row">
          <input
            id="form-submit-button"
            type='submit'
            className="button auth-form-button"
            style={{ margin: '0 0 0 auto' }}
            value={'Reset password'}
            onMouseEnter={this.isFormValid}
            disabled={!this.state.isValid}
          />

          { this.state.loading && (
            <div className='loader'><ScaleLoader height={25} width={2} /></div>
          ) }
        </div>

      </form>
    );
  }
}

export { ForgetPassword };
