import React from 'react';
import { connect } from 'react-redux';
import { Route, IndexRoute } from 'react-router';
import App from './app';
import SplashContainer from 'modules/splash/';
import HomeContainer from 'modules/home/';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={ SplashContainer }/>

    <Route path="/home" component={ HomeContainer }>

    </Route>

  </Route>
);

export default routes;
