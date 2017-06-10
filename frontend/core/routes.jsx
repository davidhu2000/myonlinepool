/* global window */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'core/app';
import Splash from 'modules/splash/';
import Home from 'modules/home/';
import Picks from 'modules/picks/';
import Metrics from 'modules/metrics';
import Leaderboard from 'modules/leaderboard';
import Moderator from 'modules/moderator';
import Pool from 'modules/pool';
import Auth from 'modules/user';
import PoolForm from 'modules/pool_form';

const _redirectIfSignedOut = (nextState, replace) => {
  if (!window.currentUser) {
    replace('/signin');
  }
};

const _redirectIfSignedIn = (nextState, replace) => {
  if (window.currentUser) {
    replace('/home');
  }
};

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />


    <Route path="/signin" component={Auth} onEnter={_redirectIfSignedIn} />
    <Route path="/signup" component={Auth} onEnter={_redirectIfSignedIn} />

    <Route path="/home" component={Home} onEnter={_redirectIfSignedOut} />

    <Route path="/pool/create" component={PoolForm} onEnter={_redirectIfSignedOut} />
    <Route path="/pool/:poolId" onEnter={_redirectIfSignedOut} >
      <IndexRoute component={Pool} />
      <Route path="picks" component={Picks}></Route>
      <Route path="leaderboard" component={Leaderboard}></Route>
      <Route path="metrics" component={Metrics}></Route>
      <Route path="moderator" component={Moderator}></Route>
    </Route>

  </Route>
);

export default routes;
