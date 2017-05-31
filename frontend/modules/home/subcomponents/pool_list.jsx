import React from 'react';
import { Link, withRouter } from 'react-router';
import PoolListItem from './pool_list_item';

class PoolList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showJoin: false,
      showCreate: false,
      joinName: "",
      joinPass: "",
      createName: "",
      createPass: ""
    };

    this.genList = this.genList.bind(this);
    this.toggleJoin = this.toggleJoin.bind(this);
    this.submitJoin = this.submitJoin.bind(this);
    this.toggleCreate = this.toggleCreate.bind(this);
    this.submitCreate = this.submitCreate.bind(this);
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
    if (this.state.showCreate) {
      this.setState({ showCreate: false, showJoin: !this.state.showJoin })
    } else {
      this.setState({ showJoin: !this.state.showJoin });
    }
  }

  toggleCreate() {
    if (this.state.showJoin) {
      this.setState({ showJoin: false, showCreate: !this.state.showCreate })
    } else {
      this.setState({ showCreate: !this.state.showCreate });
    }
  }

  submitJoin(e) {
    e.preventDefault();
  }

  submitCreate(e) {
    e.preventDefault();
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  clearField(field) {
    return e => {
      this.setState({
        [field]: ""
      });
    };
  }

  render() {
    return (
      <div className="pool-list">
        <div className="pool-list-top-item">{this.props.Title}</div>
        {this.genList()}
        <button className="pool-join-button" onClick={this.toggleJoin.bind(this)}>
          <div>
          { this.state.showJoin ? <i
            className="fa fa-minus"
            aria-hidden="true"/> : <i
            className="fa fa-plus"
            aria-hidden="true"/> }
          Join Pool
          </div>
        </button>
        <button className="pool-create-button" onClick={this.toggleCreate.bind(this)}>
          <div>
          { this.state.showCreate ? <i
            className="fa fa-minus"
            aria-hidden="true"/> : <i
            className="fa fa-plus"
            aria-hidden="true"/> }
          Create Pool
          </div>
        </button>

        { this.state.showJoin ?
          <form onSubmit={ this.submitJoin } className="pool-join-form">
            <input  name="joinName"
                    placeholder="Pool Name"
                    value={ this.state.joinName }
                    onChange={ this.update("joinName") }
                    className="pool-form-name"></input>
            <input  name="joinPass"
                    placeholder="Pool Password"
                    value={ this.state.joinPass }
                    onChange={ this.update("joinPass") }
                    className="pool-form-input"></input>
            <input type='submit'
                   className="pool-form-button"
                   value="join"></input>
          </form> : null }

        { this.state.showCreate ?
          <form onSubmit={ this.submitCreate } className="pool-create-form">
            <input  name="createName"
                    placeholder="Pool Name"
                    value={ this.state.createName }
                    onChange={ this.update("createName") }
                    className="pool-form-name"></input>
            <input  name="createPass"
                    placeholder="Pool Password"
                    value={ this.state.createPass }
                    onChange={ this.update("createPass") }
                    className="pool-form-input"></input>
            <input type='submit'
                   className="pool-form-button"
                   value="create"></input>
          </form> : null }

      </div>
    );
  }
}

export default PoolList;
