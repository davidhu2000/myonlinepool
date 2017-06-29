import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';

class WaitingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    autoBind(this);
  }

  render() {
    return (
      <div>
        The server is processing this picks and calculating standings. 
        <br />
        Please stand by.
      </div>
    );
  }
}

WaitingPage.propTypes = {
};

export { WaitingPage };
