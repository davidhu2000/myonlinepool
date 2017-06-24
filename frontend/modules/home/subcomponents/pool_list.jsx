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

  renderList() {
    let pools = values(this.props.pools);
    return pools.map(pool => (
      <PoolListItem
        key={Math.random()}
        title={pool.title}
        id={pool.id}
      />
    ));
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
            <button id="pool-join-button" className="pool-join-button" onClick={this.props.toggleJoinFormModal}>
              <div>Join Pool</div>
            </button>
          </div>
        </div>
        <div className="pool-list-bottom">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

PoolList.propTypes = {
  pools: PropTypes.shape().isRequired,
  toggleJoinFormModal: PropTypes.func.isRequired
};

export { PoolList };
