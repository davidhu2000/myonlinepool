import React from 'react';
import autoBind from 'react-autobind';
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
  }

  render() {
    return (
      <div className="profile-container">

        <form onSubmit={this.submitForm} className="auth-form">

          <FormTextInput
            update={this.update}
            value={this.state.username}
            type='name'
            field="name"
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

        <form onSubmit={this.submitForm} className="auth-form">

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

export default withRouter(Profile);
