import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import autoBind from 'react-autobind';
import PoolListItem from './pool_list_item';
import { JoinForm } from './join_form';

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

    autoBind(this);
  }

  genList() {
    let pools = this.props.Pools;
    return pools.map(pool => (
      <PoolListItem
        key={Math.random()}
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
        <div className="pool-list-top">
          <div className="pool-list-top-title">My Pools</div>
          <div className="pool-list-top-buttons">
            <button className="pool-create-button" onClick={() => hashHistory.push('pool/create')}>
              <div>
                <i className="fa fa-angle-right" aria-hidden="true" />
                Create Pool
              </div>
            </button>
            <button id="pool-join-button" className="pool-join-button" onClick={this.toggleJoin.bind(this)}>
              <div>
              { this.state.showJoin ? <i
                className="fa fa-minus"
                aria-hidden="true"/> : <i
                className="fa fa-plus"
                aria-hidden="true"/> }
              Join Pool
              </div>
            </button>
          </div>  
        </div>
        {this.genList()}
        { this.state.showJoin ?
          <JoinForm
            toggleJoinForm={this.toggleJoin}
            /> : null }
      </div>
    );
  }
}

export default PoolList;
