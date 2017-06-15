import * as AuthAPI from './utils';
import { receiveErrors } from 'common/actions';

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
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const signout = () => dispatch => (
  AuthAPI.signout().then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const signup = user => dispatch => (
  AuthAPI.signup(user).then(
    () => dispatch(receiveUser(null))
  ).fail(
    err => dispatch(receiveErrors(err.responseJSON))
  )
);
