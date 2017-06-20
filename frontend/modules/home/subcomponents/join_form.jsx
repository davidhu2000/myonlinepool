import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hasHistory } from 'react-router';

import { FormTextInput } from 'common/components';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: 'bIxWviappRc',
      password: 'password'
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  joinPool(e) {
    e.preventDefault();
    let { identifier, password } = this.state;
    this.props.joinPool(identifier, password).then(
      res => {
        console.log(res);
        this.props.toggleJoinForm();
        hasHistory.push(`/pool/${res.id}`);
      }
    );
  }
  render() {
    return (
      <div className="pool-join-form">
        <form className='join-form' onSubmit={this.joinPool} >
          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.identifier}
            label="Pool Key"
            field='identifier'
            errorMessage='Please enter the unique pool key.'
          />

          <FormTextInput
            update={this.update}
            type='password'
            value={this.state.password}
            label="Password"
            field="password"
            errorMessage='Please enter a password'
          />

          <button className="join-form-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  toggleJoinForm: PropTypes.func.isRequired,
  joinPool: PropTypes.func.isRequired
};

export const JoinForm = Form;
