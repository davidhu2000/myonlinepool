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
    err => dispatch(receiveAlerts(processMessages(err.responseJSON)))
  )
);

export const signout = () => dispatch => (
  AuthAPI.signout().then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON)))
  )
);

export const signup = user => dispatch => (
  AuthAPI.signup(user).then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON)))
  )
);
