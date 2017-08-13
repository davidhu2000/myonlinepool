import React from 'react';
import PropTypes from 'prop-types';
import { sampleSize } from 'lodash';
import NflTeams from './nfl-teams.json';


class Splash extends React.Component {
  constructor() {
    super();

    this.state = {
      teams: sampleSize(NflTeams, 5)
    };
  }

  componentDidMount() {
    let { user } = this.props;
    this._redirectIfLoggedIn(user);
  }

  componentWillReceiveProps() {
    let { user } = this.props;
    this._redirectIfLoggedIn(user);
  }

  _redirectIfLoggedIn(userId) {
    if (userId) {
      this.props.router.push('/home');
    }
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

          {/* Randomly display logo for 5 NFL teams */}
          <div className="splash-mid-carousel">
            { this.state.teams.map(name => (
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

Splash.propTypes = {
  user: PropTypes.shape().isRequired
};

export default Splash;
