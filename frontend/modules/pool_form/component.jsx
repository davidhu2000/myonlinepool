import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class PoolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      buy_in: 0,
      season: 2017,
      league: 'nfl',
      password: '',
      password_confirmation: ''
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  validateForm() {
    let { title, password, password_confirmation } = this.state;
    let matchingPassword = password === password_confirmation;
    let titlePresent = title.length > 0;

    return matchingPassword && titlePresent;
  }

  createPool(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.createPool(this.state);
    } else {
      // render errors
      console.log('error');
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="pool-form-container">
        <form className='pool-form' onSubmit={this.createPool} >
          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.title}
            label="Title"
            field='title'
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.description}
            label="Description"
            field="description"
          />

          <FormTextInput
            update={this.update}
            value={this.state.buy_in}
            type='number'
            label="Buy In"
            field='buy_in'
          />

          <FormTextInput
            update={this.update}
            type='password'
            value={this.state.password}
            label="Password"
            field='password'
          />

          <FormTextInput
            update={this.update}
            type='password'
            value={this.state.password_confirmation}
            label="Password Confirmation"
            field='password_confirmation'
          />

         <div className="pool-create-button">
           <input id="buy_in" type="submit" className="" value="Create" />
         </div>

        </form>
      </div>
    );
  }


}

PoolForm.propTypes = {
  createPool: PropTypes.func.isRequired
};

export default PoolForm;
