import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

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
    return (
      <div className='pool-form'>
        <form onSubmit={this.createPool} >
          <div className="">
            <input
              type="text"
              className=""
              value={this.state.title}
              onChange={this.update('title')}
            />
            <label htmlFor="title">Title</label>
          </div>

          <div className="">
            <textarea
              type="text"
              className=""
              value={this.state.description}
              onChange={this.update('description')}
            />
            <label htmlFor="description">Description</label>
          </div>

          <div className="">
            <input
              type="number"
              className=""
              value={this.state.buy_in}
              onChange={this.update('buy_in')}
            />
            <label htmlFor="buy_in">Buy In</label>
          </div>

          <div className="">
            <input
              type="password"
              className=""
              value={this.state.password}
              onChange={this.update('password')}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="">
            <input
              type="password"
              className=""
              value={this.state.password_confirmation}
              onChange={this.update('password_confirmation')}
            />
            <label htmlFor="password_confirmation">Password Confirmation</label>
          </div>

          <div className="">
            <input id="buy_in" type="submit" className="" value="Create Pool" />
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
