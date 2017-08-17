import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { FormTextInput } from 'common/components';
import { BulletinBoxItem } from './';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class BulletinBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      invitee: ""
    };

    autoBind(this);
  }

  handleSubmit() {
    // e.preventDefault();
    this.props.sendInvite({
      username: this.props.userName,
      email: this.state.invitee,
      id: this.props.id,
      password: this.props.password });
    this.closeModal();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  renderBulletins() {
    let { bulletins } = this.props;
    let bulletinIds = Object.keys(bulletins).reverse().slice(0, 1);

    return bulletinIds.map(id => (
      <BulletinBoxItem key={`bulletin-${id}`} bulletin={bulletins[id]} />
    ));
  }

  render() {
    return (
      <div className="bulletin-box">
        <div className="bulletin-header">
          <h2>Pool: {this.props.title}</h2>
          <h2>Buy In: ${this.props.buyIn}</h2>
          <h2>Moderator: {this.props.moderatorName}</h2>
          <button className="invite-button" onClick={() => this.openModal()}>
              Send Invite
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <FormTextInput
              update={this.update}
              type='text'
              value={this.state.invitee}
              label=""
              field="invitee"
              errorMessage="please enter an email"
            />
            <button onClick={() => this.handleSubmit()}>
                Invite Member
            </button>
            <button onClick={() => this.closeModal()}>
                Cancel
            </button>
          </Modal>
        </div>
        <div className="bulletin-container">
          {this.renderBulletins()}
        </div>
      </div>
    );
  }
}

BulletinBox.propTypes = {
  bulletins: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  buyIn: PropTypes.number.isRequired,
  moderatorName: PropTypes.string.isRequired,
  sendInvite: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export { BulletinBox };
