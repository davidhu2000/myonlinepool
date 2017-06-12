import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hashHistory } from 'react-router';

import { FormTextInput } from 'common/components';

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
        <FormTextInput
          update={this.update}
          value={this.state.email}
          type="text"
          field="email"
          label="Email"
        />
      </div>
    );
  }
}

ForgetPassword.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

export { ForgetPassword };
