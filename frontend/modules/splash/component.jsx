import React from 'react';
import { withRouter, Link } from 'react-router';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="splash-container">
        <div className="splash-top">
          <h1>Welcome to My Online Pool</h1>
          <p>
          A simple app to organize your sports pools.
          <br />
          No more organizational nightmares.
          </p>
        </div>
        <div className="splash-mid">
          <h1>Play with your favorite teams</h1>
          <div className="splash-mid-carousel">
            <img className='logo-Raiders' />
            <img className='logo-Cardinals' />
            <img className='logo-Bears' />
            <img className='logo-Bills' />
            <img className='logo-Panthers' />

            {/*<img src="assets/logos/Raiders.gif" />
            <img src="assets/logos/Cardinals.gif" />
            <img src="assets/logos/Bears.gif" />
            <img src="assets/logos/Bills.gif" />
            <img src="assets/logos/Panthers.gif" />*/}
          </div>
        </div>
        <div className="splash-bottom">
          <h1>Create or join pools with all of your groups</h1>
          <div className="splash-bottom-body">
            <p>Work</p>
            <p>Family</p>
            <p>Friends</p>
          </div>
          <div className="splash-bottom-body">
            <p>Enemies</p>
            <p>Frenemies</p>
            <p>Strangers</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
