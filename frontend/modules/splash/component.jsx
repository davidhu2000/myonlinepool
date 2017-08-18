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
          <h1>Welcome to MyOnlinePool.com</h1>
          <p>
          A simple app to make running your own office pool <span>QUICK</span>, <span>EASY</span> and most
          of all <span>FUN</span>!
          <br />
          With the 2017 NFL fast approaching, why not create and host
          your own NFL Football office pool today.
          <br />
            <span>Invite your friends</span> to join the fun!
          </p>
        </div>
        <div className="splash-mid">
          <h1>Host Your Own 2017 NFL Football Pool in 3 Easy Steps</h1>
          <p>
            Register for free
          <br />
            Create a pool
          <br />
            Invite friends to play
          </p>
          {/* Randomly display logo for 5 NFL teams */}
          {/* <div className="splash-mid-carousel">
            { this.state.teams.map(name => (
              <div key={name} className={`logo-${name}`} />
            ))}
          </div> */}
        </div>
        <div className="splash-bottom">
          <h1>Playing is even easier! Here's how to play</h1>
          <p>
            A moderator creates a pool, sets rules and invites members
            <br />
            Members join the pool, make their picks and score points for correct picks
            <br />
            The player that scores the most points wins!
          </p>
        </div>
      </div>
    );
  }
}

Splash.propTypes = {
  user: PropTypes.shape().isRequired
};

export default Splash;
