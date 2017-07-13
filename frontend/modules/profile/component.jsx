import React from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

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

  render() {
    return (
      <div>
        {this.props.user.email}
        {this.props.user.name}
      </div>
    );
  }
}

export default withRouter(Profile);
