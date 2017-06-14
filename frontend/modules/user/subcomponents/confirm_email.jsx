import React from 'react';
import PropTypes from 'prop-types';

class ConfirmEmail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>Confirming Email</div>
    );
  }
}

ConfirmEmail.propTypes = {
};

export { ConfirmEmail };
