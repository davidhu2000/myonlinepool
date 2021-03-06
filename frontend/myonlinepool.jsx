/* global document, window */
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './core/store';
import Root from './core/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const preloadedState = {
    user: window.currentUser || null
  };

  const store = configureStore(preloadedState);

  ReactDOM.render(<Root store={store} />, root);
  window.store = store;
  window.s = store.getState;
});
