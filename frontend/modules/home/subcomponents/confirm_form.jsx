import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';

class ConfirmForm extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleClick() {
    // e.preventDefault();
    console.log("test");
    this.props.removeMember(this.props.userId, this.props.poolId);
  }

  render() {
    return (
      <div className="confirm-form">
        <div className="confirm-header">
          Confirm pool removal?
        </div>
        <div className="confirm-buttons">
          <button onClick={this.handleClick} type="submit" className="confirm-form-button confirm-button">
            Confirm
          </button>
          <button className="confirm-form-button">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

ConfirmForm.propTypes = {
  removeMember: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  poolId: PropTypes.number.isRequired
};

export { ConfirmForm };
