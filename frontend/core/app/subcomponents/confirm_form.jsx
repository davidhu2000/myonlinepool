import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withModal } from 'helpers';

class Form extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    autoBind(this);
  }

  handleClick() {
    this.props.toggleModal();
    this.props.removeMember(this.props.userId, this.props.poolId);
  }

  render() {
    return (
      <div className="confirm-form">
        <div className="confirm-header">
          Confirm pool removal?
        </div>
        <div className="confirm-buttons">
          <button
            onClick={this.handleClick}
            type="submit"
            className="confirm-form-button confirm-button"
          >
            Confirm
          </button>
          
          <button className="confirm-form-button" onClick={this.props.toggleModal}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  removeMember: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  poolId: PropTypes.number.isRequired
};

export const ConfirmForm = withModal(Form);
