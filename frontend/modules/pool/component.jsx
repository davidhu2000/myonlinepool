import React from 'react';
import { withRouter, Link } from 'react-router';

class Pool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pool-container">
        <div className="pool-top">
          <h1>Welcome to My Online Pool</h1>
          <p>
          A simple app to organize your betting pools.
          <br/>
          No more organizational nightmares.
          </p>
        </div>
        <div className="pool-mid">
          <h1>Play with your favorite teams</h1>
          <div className="pool-mid-carousel">
            <img className="shield" src="assets/shield.svg"/>
            <img src="assets/cardinals.png"/>
            <img src="assets/bears.png"/>
            <img src="assets/bills.png"/>
            <img src="assets/panthers.png"/>
          </div>
        </div>
        <div className="pool-bottom">
          <h1>Create or join pools with all of your groups</h1>
          <div className="pool-bottom-body">
            <p>Work</p>
            <p>Family</p>
            <p>Friends</p>
          </div>
          <div className="pool-bottom-body">
            <p>Enemies</p>
            <p>Frenemies</p>
            <p>Strangers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Pool);
