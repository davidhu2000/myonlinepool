import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as API from './utils';

export const AUTH = {
  RECEIVE_USER: 'auth/RECEIVE_USER'
};

export const receiveUser = user => ({
  type: AUTH.RECEIVE_USER,
  user
});

export const changeEmail = email => dispatch => (
  API.changeEmail(email).then(
    res => dispatch(receiveUser(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const changeUsername = username => dispatch => (
  API.changeUsername(username).then(
    res => dispatch(receiveUser(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

