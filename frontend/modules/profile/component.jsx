import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { FormTextInput } from 'common/components';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: ""
    };

    autoBind(this);
  }

  componentWillMount() {
    this.setState({ email: this.props.user.email, username: this.props.user.name });
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  submitForm(e) {
    e.preventDefault();

    let sub = {
      user_id: this.props.user.id,
      username: this.state.username
    };
    this.props.changeUsername(sub);
  }

  submitOtherForm(e) {
    e.preventDefault();

    let sub = {
      user_id: this.props.user.id,
      email: this.state.email
    };
    this.props.changeEmail(sub);
  }

  render() {
    return (
      <div className="profile-container">

        <form onSubmit={this.submitForm} className="auth-form">

          <FormTextInput
            update={this.update}
            value={this.state.username}
            type='name'
            field="username"
            label='username'
            errorMessage="Please enter a new username"
          />

          <input
            id="form-submit-button"
            type='submit'
            className="button auth-form-button"
            value='Update'
          />

        </form>

        <form onSubmit={this.submitOtherForm} className="auth-form">

          <FormTextInput
            update={this.update}
            value={this.state.email}
            type='name'
            field="email"
            label='email'
            errorMessage="Please enter a new email"
          />

          <input
            id="form-submit-button"
            type='submit'
            className="button auth-form-button"
            value='Update'
          />

        </form>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  changeUsername: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired
};

export default withRouter(Profile);
