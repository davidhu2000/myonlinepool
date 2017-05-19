import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import SplashContainer from 'modules/splash/';
import HomeContainer from 'modules/home/';
import PicksContainer from 'modules/picks/';
import MetricsContainer from 'modules/metrics';
import LeaderboardContainer from 'modules/leaderboard';
import ModeratorContainer from 'modules/moderator';

const routes = (
  <Route path="/" component={ App }>
  <IndexRoute component={ SplashContainer }/>

    <Route path="/home" component={ HomeContainer }>
    </Route>

    <Route path="/pool/:poolId">
      <IndexRoute component={ PoolContainer }/>
      <Route path="/picks" component={ PicksContainer }>
      </Route>
      <Route path="/leaderboard" component={ LeaderboardContainer }>
      </Route>
      <Route path="/metrics" component={ MetricsContainer }>
      </Route>
      <Route path="/moderator" component={ ModeratorContainer }>
      </Route>
    </Route>

  </Route>
);

export default routes;
