import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import SplashContainer from 'modules/splash/';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ SplashContainer }/>
  </Route>
);

export default routes;
