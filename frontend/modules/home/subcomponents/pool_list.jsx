import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import autoBind from 'react-autobind';
import PoolListItem from './pool_list_item';
import { JoinForm } from './join_form';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class PoolList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joinName: "",
      joinPass: "",
      createName: "",
      createPass: "",
      modalIsOpen: false
    };

    autoBind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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
            <button id="pool-join-button" className="pool-join-button" onClick={this.openModal}>
              <div>
              Join Pool
              </div>
            </button>
          </div>  
        </div>
        {this.genList()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="label"
        >
          <JoinForm
            toggleJoinForm={this.toggleJoin}
          />
        </Modal>
      </div>
    );
  }
}

export default PoolList;
