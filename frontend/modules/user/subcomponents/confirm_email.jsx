/* global $ */
import React from 'react';
import PropTypes from 'prop-types';

class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmSuccessful: false,
      message: 'Confirming email...'
    };
  }

  componentDidMount() {
    let { email, token } = this.props;

    $.ajax({
      method: 'POST',
      url: '/api/auth/registrations/confirm',
      data: {
        user: {
          email,
          confirmation_token: token
        }
      }
    }).then(
      () => this.setState({ message: 'Email confirmed. Please sign in.' }),
      err => console.log(err)
    );
  }

  render() {
    return (
      <div>
        { this.state.message }
        {/* add spinner */}
      </div>
    );
  }
}

ConfirmEmail.propTypes = {
  email: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired
};

export { ConfirmEmail };
