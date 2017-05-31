import React from 'react';
import { Link, withRouter } from 'react-router';
import PoolListItem from './pool_list_item';

class PoolList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showJoin: false,
      joinName: "",
      joinPass: ""
    };

    this.genList = this.genList.bind(this);
    this.toggleJoin = this.toggleJoin.bind(this);
    this.submitJoin = this.submitJoin.bind(this);
  }

  genList() {
    let pools = this.props.Pools;
    return pools.map( pool => (
      <PoolListItem
        Name={pool.name}
        Id={pool.id}
        />
    ));
  }

  toggleJoin() {
      this.setState({ showJoin: !this.state.showJoin });
  }

  submitJoin(e) {
    e.preventDefault();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  render() {
    return (
      <div className="pool-list">
        <div className="pool-list-top-item">{this.props.Title}</div>
        {this.genList()}
        <button className="pool-join-button" onClick={this.toggleJoin.bind(this)}>
        { this.state.showJoin ? <i
          className="fa fa-minus"
          aria-hidden="true"/> : <i
          className="fa fa-plus"
          aria-hidden="true"/> }
          Join Pool
        </button>
        <button className="pool-create-button" onClick={this.toggleJoin.bind(this)}>
        { this.state.showJoin ? <i
          className="fa fa-minus"
          aria-hidden="true"/> : <i
          className="fa fa-plus"
          aria-hidden="true"/> }
          Create Pool
        </button>

        { this.state.showJoin ?
          <form onSubmit={ this.submitJoin } className="pool-form">
            <input  name="joinName"
                    value={ this.state.joinName }
                    onChange={ this.update("joinName") }
                    className="pool-form-name"></input>
            <input  name="joinPass"
                    value={ this.state.joinPass }
                    onChange={ this.update("joinPass") }
                    className="pool-form-input"></input>
            <input type='submit'
                   className="pool-form-button"
                   value="submit"></input>
          </form> : null }
      </div>
    );
  }
}

export default PoolList;
