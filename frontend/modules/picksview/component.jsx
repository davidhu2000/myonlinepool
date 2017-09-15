import React from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

class Picksview extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="picks-view">
        test
      </div>
    );
  }
}

export default withRouter(Picksview);
