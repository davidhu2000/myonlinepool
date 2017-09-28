import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { Link } from 'react-router';
import { FormTextInput } from 'common/components';
import { BulletinBoxItem } from './';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "40px",
    borderRadius: "2px",
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    width: "400px"
  }
};

class BulletinBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      infoModalIsOpen: false,
      invitee: ""
    };

    autoBind(this);
  }

  handleSubmit() {
    this.props.sendInvite({
      username: this.props.userName,
      email: this.state.invitee,
      id: this.props.id,
      password: this.props.password });
    this.props.receiveAlerts(['Invite sent.'], 200);
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

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  closeInfoModal() {
    this.setState({ infoModalIsOpen: false });
  }

  openInfoModal() {
    this.setState({ infoModalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
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
          <Link to={`/pool/${this.props.poolId}/picks/${this.props.prefs.week}`}>
            <button className="invite-button">
              Make Picks
            </button>
          </Link>
          <button className="invite-button" onClick={() => this.openInfoModal()}>
            Pool Info
          </button>
          <Modal
            isOpen={this.state.infoModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeInfoModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2><span>Pool:</span> {this.props.title}</h2>
            <h2><span>Description:</span> {this.props.description}</h2>
            <h2><span>Moderator:</span> {this.props.moderatorName}</h2>
            <h2><span>Buy In:</span> ${this.props.buyIn}</h2>
            <h2><span>Identifier:</span> {this.props.id}</h2>
            <h2><span>Password:</span> {this.props.password}</h2>
          </Modal>
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
              label="email"
              field="invitee"
              errorMessage="please enter an email"
            />
            <div className="modal-button-row">
              <button className="modal-button" onClick={() => this.handleSubmit()}>
                  Invite Member
              </button>
              <button className="modal-button" onClick={() => this.closeModal()}>
                  Cancel
              </button>
            </div>
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
  password: PropTypes.string.isRequired,
  poolId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  receiveAlerts: PropTypes.func.isRequired,
  prefs: PropTypes.shape().isRequired
};

export { BulletinBox };
