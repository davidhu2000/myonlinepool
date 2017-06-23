import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { hasHistory } from 'react-router';

import { FormTextInput } from 'common/components';

class ConfirmForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identifier: 'bIxWviappRc',
      password: 'password'
    };

    autoBind(this);
  }

  render() {
    return (
      <div className="confirm-form">
        <div className="confirm-header">
          Confirm pool removal?
        </div>
        <div className="confirm-buttons">
          <button className="confirm-form-button confirm-button">
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
  toggleJoinForm: PropTypes.func.isRequired,
  joinPool: PropTypes.func.isRequired
};

export { ConfirmForm };
