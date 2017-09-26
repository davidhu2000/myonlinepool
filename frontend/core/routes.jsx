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
import AdminConsole from 'modules/console';
import GameForm from 'modules/game_form';
import Payment from 'modules/payment';
import PaymentConfirmation from 'modules/payment_confirmation';
import Profile from 'modules/profile';
import Faq from 'modules/faq';
import Pricing from 'modules/pricing';
import Picksview from 'modules/picksview';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Splash} />

    <Route path="/faq" component={Faq} />

    <Route path="/pricing" component={Pricing} />

    <Route path="/auth" component={Auth} />

    <Route path="/home" component={Home} />

    <Route path="/pool/create" component={PoolForm} />

    <Route path="/console">
      <IndexRoute component={AdminConsole} />
      <Route path="create/:weekId/:gameId" component={GameForm} />
    </Route>

    <Route path="/profile">
      <IndexRoute component={Profile} />
    </Route>

    <Route path="/pool/:poolId" component={Pool}>
      <IndexRoute component={PoolHome} />
      <Route path="picks/:weekId">
        <IndexRoute component={Picks} />
        <Route path="picksview/:weekId" component={Picksview} />
      </Route>
      <Route path="leaderboard" component={Leaderboard} />
      <Route path="metrics" component={Metrics} />
      <Route path="moderator" component={Moderator} />
      <Route path='payment' component={Payment} />
    </Route>

    <Route path='/payment_confirmation' component={PaymentConfirmation} />

  </Route>
);

export default routes;
