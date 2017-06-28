import React from 'react';
import { sampleSize } from 'lodash';
import NflTeams from './nfl-teams.json';

class Splash extends React.Component {
  render() {
    console.log(this.props);
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

          {/* Randomly display logo for 5 NFL teams */}
          <div className="splash-mid-carousel">
            { sampleSize(NflTeams, 5).map(name => (
              <div key={name} className={`logo-${name}`} />
            ))}
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

export default Splash;
