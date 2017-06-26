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
import PoolHome from 'modules/pool_home';
import Auth from 'modules/auth';
import PoolForm from 'modules/pool_form';
// import Console from 'modules/console';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />

    <Route path="/auth" component={Auth} />

    <Route path="/home" component={Home} />

    <Route path="/pool/create" component={PoolForm} />

    {/*<Route path="/console" component={Console} />*/}

    <Route path="/pool/:poolId" component={Pool}>
      <IndexRoute component={PoolHome} />
      <Route path="picks" component={Picks} />
      <Route path="leaderboard" component={Leaderboard} />
      <Route path="metrics" component={Metrics} />
      <Route path="moderator" component={Moderator} />
    </Route>

  </Route>
);

export default routes;
