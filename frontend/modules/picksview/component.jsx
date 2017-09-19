import React from 'react';
import autoBind from 'react-autobind';
import { withRouter } from 'react-router';

class Picksview extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  renderGames(){
    console.log(this.props.picks);
  }

  render() {
    return (
      <div className="picks-view">
        <div className="picks-view-header">
          <div>
            Player Name
          </div>
          <div>
            Points
          </div>
          {this.renderGames()}
        </div>
        test
      </div>
    );
  }
}

export default withRouter(Picksview);
