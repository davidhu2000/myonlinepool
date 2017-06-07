import React from 'react';
import autoBind from 'react-autobind';

class PoolForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      buy_in: 0,
      season: 2017,
      league: 'nfl'
    };

    autoBind(this);
  }

  update(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  createPool(e) {
    e.preventDefault();
    console.log(this.state);
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
            <input id="buy_in" type="submit" className="" value="Create Pool" />
          </div>

        </form>
      </div>
    );
  }
}

export default PoolForm;
