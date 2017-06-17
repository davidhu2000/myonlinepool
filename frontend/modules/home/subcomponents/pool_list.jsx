import React from 'react';
import Modal from 'react-modal';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import { Link, hashHistory } from 'react-router';
import { values } from 'lodash';

import { PoolListItem } from './';
import { JoinForm } from './join_form';

import customStyles from './modal_styles.json';

class PoolList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    autoBind(this);
  }

  // need an unmount action?
  componentWillMount() {
    Modal.setAppElement('body');
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  genList() {
    let pools = values(this.props.pools);
    return pools.map(pool => (
      <PoolListItem
        key={Math.random()}
        Name={pool.name}
        Id={pool.id}
      />
    ));
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
        <div className="pool-list-top">
          <div className="pool-list-top-title">My Pools</div>
          <div className="pool-list-top-buttons">
            <button className="pool-create-button" onClick={() => hashHistory.push('pool/create')}>
              <div>
                <i className="fa fa-angle-right" aria-hidden="true" />
                Create Pool
              </div>
            </button>
            <button id="pool-join-button" className="pool-join-button" onClick={this.toggleModal}>
              <div>Join Pool</div>
            </button>
          </div>
        </div>
        {this.genList()}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          contentLabel="label"
          style={customStyles}
        >
          <JoinForm toggleJoinForm={this.toggleModal} joinPool={this.props.joinPool} />
        </Modal>
      </div>
    );
  }
}

PoolList.propsTypes = {
  pools: PropTypes.shape().isRequired,
  joinPool: PropTypes.func.isRequired
};

export { PoolList };
