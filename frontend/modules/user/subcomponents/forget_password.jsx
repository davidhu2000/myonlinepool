import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';

import { EmailInput } from 'common/components';

class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: ''
    };

    autoBind(this);
  }

  componentDidMount() {
    this._redirectIfLoggedIn();
  }

  _redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      hashHistory.replace('/home');
    }
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className='signup-container'>
        <EmailInput context={this} email={this.state.email} />
      </div>
    );
  }
}

ForgetPassword.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export { ForgetPassword };
