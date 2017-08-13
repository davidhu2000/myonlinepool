import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

import { FormTextInput } from 'common/components';

class BulletinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bulletin: ""
    };

    autoBind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let bulletin = {
      pool_id: this.props.poolId,
      body: this.state.bulletin
    };
    this.props.createBulletin(bulletin).then(
      () => this.setState({ bulletin: '' })
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="bulletin-form">

        <FormTextInput
          update={this.update}
          type='text'
          value={this.state.bulletin}
          label="New Bulletin"
          field="bulletin"
          errorMessage="Please enter a message"
        />

        <div className="bulletin-form-button-row">
          <button
            onClick={() => this.props.deleteBulletin(this.props.poolId)}
            className="bulletin-form-button"
          >
            Delete Last
          </button>
          <input type='submit' className="bulletin-form-button" value="Post" />
        </div>
      </form>
    );
  }
}

BulletinForm.propTypes = {
  poolId: PropTypes.number.isRequired,
  createBulletin: PropTypes.func.isRequired,
  deleteBulletin: PropTypes.func.isRequired
};

export { BulletinForm };
