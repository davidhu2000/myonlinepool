import { receiveAlerts, POOL } from 'common/actions';
import { processMessages } from 'helpers';

import * as PoolAPI from './utils';

export const receiveMessages = messages => ({
  type: POOL.RECEIVE_MESSAGES,
  messages
});

export const fetchMessages = (poolId, offset = 0) => dispatch => (
  PoolAPI.fetchMessages(poolId, offset).then(
    res => dispatch(receiveMessages(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const createMessage = message => dispatch => (
  PoolAPI.createMessage(message).then(
    res => dispatch(receiveMessages(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const receiveBulletins = bulletins => ({
  type: POOL.RECEIVE_BULLETINS,
  bulletins
});

export const fetchBulletins = (poolId, offset = 0) => dispatch => (
  PoolAPI.fetchBulletins(poolId, offset).then(
    res => dispatch(receiveBulletins(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
