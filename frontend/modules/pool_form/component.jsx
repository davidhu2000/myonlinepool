/* global document */
import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { ScaleLoader } from 'react-spinners';

import { FormTextInput } from 'common/components';

class PoolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      buy_in: '',
      season: '2017',
      league: 'nfl',
      password: '',
      password_confirmation: '',
      isValid: false,
      loading: false
    };

    autoBind(this);
  }

  isFormValid() {
    let inputs = [];

    inputs.push(
      this.state.title,
      this.state.description,
      this.state.buy_in,
      this.state.season,
      this.state.league,
      this.state.password,
      this.state.password_confirmation
    );

    let noEmptyFields = inputs.every(val => !!val);
    let noError = document.getElementsByClassName('form-group-error-message').length === 0;
    this.setState({ isValid: noEmptyFields && noError });
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  createPool(e) {
    e.preventDefault();
    this.setState({ loading: true });

    setTimeout(() => this.props.createPool(this.state).then(
      poolId => hashHistory.push(`pool/${poolId}`),
      err => {
        this.setState({ loading: false });
        // add action to render alert
        console.log(err);
      }
    ), 500000);
  }

  render() {
    return (
      <div className="pool-form-container">
        <form className='pool-form' onSubmit={this.createPool} >
          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.title}
            label="Title"
            field='title'
            errorMessage="Please enter a title"
          />

          <FormTextInput
            update={this.update}
            type='text'
            value={this.state.description}
            label="Description"
            field="description"
            errorMessage="Please enter a description"
          />

          <FormTextInput
            update={this.update}
            value={this.state.buy_in}
            type='number'
            label="Buy In"
            field='buy_in'
            errorMessage="Please enter a buy in."
          />

          <FormTextInput
            update={this.update}
            type='password'
            value={this.state.password}
            label="Password"
            field='password'
            errorMessage="Password needs to be at least 6 characters"
          />

          <FormTextInput
            update={this.update}
            type='password'
            value={this.state.password_confirmation}
            label="Password Confirmation"
            field='password_confirmation'
            password={this.state.password}
            errorMessage="Password confirmation does not match password."
          />

          <div className="submit-row">
            <input
              type="submit"
              className="button pool-create-button"
              value="Create"
              onMouseEnter={this.isFormValid}
              disabled={!this.state.isValid}
            />

            { this.state.loading && (
              <div className='loader'>
                <ScaleLoader height={25} width={2} />
              </div>
            ) }
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
