import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import { ConfirmForm } from './confirm_form';

import customStyles from './modal_styles.json';

class PoolListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };
    autoBind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  // componentWillMount() {
  //   Modal.setAppElement('body');
  // }

  render() {
    return (
    <div className="pool-list-item">
      <button onClick={this.toggleModal}>
        <i className="fa fa-times" aria-hidden="true" />
      </button>  
      <Link to={`/pool/${this.props.id}`}>
        <div>
        {this.props.title}
        </div>
      </Link>
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.toggleModal}
        contentLabel="label"
        style={customStyles}
      >
        <ConfirmForm />
      </Modal>
    </div>
    );
  }
}

PoolListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export { PoolListItem };
