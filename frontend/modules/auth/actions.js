import { hashHistory } from 'react-router';

import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as AuthAPI from './utils';

export const AUTH = {
  RECEIVE_USER: 'auth/RECEIVE_USER'
};

export const receiveUser = user => ({
  type: AUTH.RECEIVE_USER,
  user
});

export const signin = user => dispatch => (
  AuthAPI.signin(user).then(
    res => dispatch(receiveUser(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const signout = () => dispatch => (
  AuthAPI.signout().then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const signup = user => dispatch => (
  AuthAPI.signup(user).then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const confirmEmail = (email, token) => dispatch => (
  AuthAPI.confirmEmail(email, token).then(
    () => {
      hashHistory.push('/auth?form=signin');
      return dispatch(receiveAlerts([{ type: 'success', message: "Email confirmed. Please sign in." }]));
    },
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const resetPassword = user => dispatch => (
  AuthAPI.resetPassword(user).then(
    () => {
      hashHistory.push('/auth?form=signin');
      return dispatch(receiveAlerts([{ type: 'success', message: "Password successfuly reset." }]));
    },
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
