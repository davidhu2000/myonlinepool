import React from 'react';
import {connect} from 'react-redux';
import {Route, IndexRoute} from 'react-router';
import App from './app';
import Splash from 'modules/splash/';
import Home from 'modules/home/';
import Picks from 'modules/picks/';
import Metrics from 'modules/metrics';
import Leaderboard from 'modules/leaderboard';
import Moderator from 'modules/moderator';
import Pool from 'modules/pool';
import Auth from 'modules/user';
import PoolForm from 'modules/pool_form';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} /> 

    <Route path="/pool/create" component={PoolForm} />
    
    <Route path="/signin" component={Auth}>
    </Route>

    <Route path="/signup" component={Auth}></Route>

    <Route path="/home" component={Home}></Route>

    <Route path="/pool/:poolId">
      <IndexRoute component={Pool} />
      <Route path="picks" component={Picks}></Route>
      <Route path="leaderboard" component={Leaderboard}></Route>
      <Route path="metrics" component={Metrics}></Route>
      <Route path="moderator" component={Moderator}></Route>
    </Route>

  </Route>
);

export default routes;
