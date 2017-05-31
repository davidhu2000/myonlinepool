import * as AuthAPI from './utils';

export const AUTH = {
  RECEIVE_USER: 'auth/RECEIVE_USER'
};

export const receiveUser = user => ({
  type: AUTH.RECEIVE_USER,
  user
});

export const login = user => dispatch => (
  AuthAPI.login(user).then(
    res => dispatch(receiveUser(res))
  ).catch(
    err => console.log(err)
  )
);

export const logout = () => dispatch => (
  AuthAPI.logout().then(
    () => dispatch(receiveUser(null))
  ).catch(
    err => console.log(err)
  )
);

export const signup = user => dispatch => (
  AuthAPI.signup(user).then(
    res => dispatch(receiveUser(res))
  ).catch(
    err => console.log(err)
  )
);
