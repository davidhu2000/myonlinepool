import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
// import enhanceWithClickOutside from 'react-click-outside';
import { FormTextInput } from 'common/components';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: '',
      password: ''
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
  }

  // handleClickOutside(e) {
  //   if (![e.path[0].id, e.path[1].id].includes('pool-join-button')) {
  //     this.props.toggleJoinForm();
  //   }
  // }

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
  toggleJoinForm: PropTypes.func.isRequired
};

export const JoinForm = Form;
