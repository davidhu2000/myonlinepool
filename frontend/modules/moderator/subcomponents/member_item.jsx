import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

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

class MemberItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    autoBind(this);
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

  renderClass(paid) {
    if (!paid) {
      return "fa fa-usd red";
    } else {
      return "fa fa-usd green";
    }
  }

  render() {
    return (
      <div className="pool-member">
        <button
          onClick={() => this.props.toggleMembership(this.props.member.userId, this.props.pool.id)}
        >
          <i className={this.renderClass(this.props.member.paid)} aria-hidden="true" />
        </button>
        <span className="member-name">{ this.props.member.name }</span>
        <div>{ this.props.member.email }</div>
        <button onClick={() => this.openModal()}>
          <i className="fa fa-times" aria-hidden="true" />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="confirm-form">
            <div className="confirm-header">
              Confirm member removal?
            </div>
            <div className="confirm-buttons">
              <button
                onClick={
                  () => this.props.removeMember(this.props.member.userId, this.props.pool.id)
                        }
                className="confirm-form-button confirm-button"
              >
                Confirm
              </button>

              <button className="confirm-form-button" onClick={() => this.closeModal()}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }

}

MemberItem.propTypes = {
  toggleMembership: PropTypes.func.isRequired,
  member: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    paid: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
  pool: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  removeMember: PropTypes.func.isRequired
};

export { MemberItem };
