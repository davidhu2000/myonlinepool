/* global document */

import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

const customStyles = {
  "content": {
    "top": "50%",
    "left": "50%",
    "right": "auto",
    "bottom": "auto",
    "marginRight": "-50%",
    "transform": "translate(-50%, -50%)",
    "padding": "40px",
    "borderRadius": "2px",
    "boxShadow": "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "width": "400px"
  }
};

export function withModal(Component) {
  class WithModal extends React.Component {
    constructor(props) {
      super(props);
      autoBind(this);
      Modal.setAppElement(document.getElementById('root'));
    }

    render() {
      return (
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.props.toggleModal}
          contentLabel="label"
          style={customStyles}
        >
          <Component {...this.props} />
        </Modal>
      );
    }
  }

  WithModal.propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired
  };

  return WithModal;
}
