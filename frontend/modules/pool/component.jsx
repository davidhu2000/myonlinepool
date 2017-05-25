import React from 'react';
import { withRouter, Link } from 'react-router';

class Pool extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pool-container">
        <div className="pool-title">
          Welcome to My Online Pool!
        </div>
        <div className="pool-body">
          <div className="pool-left">
            <div className="pool-top">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            <div className="pool-bottom">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          <div className="pool-right">
            <img src="assets/shield.svg"/>
            <img src="assets/cardinals.png"/>
            <img src="assets/bears.png"/>
            <img src="assets/bills.png"/>
            <img src="assets/panthers.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Pool);
