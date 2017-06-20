import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as PoolAPI from './utils';

export const POOL = {
  RECEIVE_ALL_MESSAGES: 'pool/RECEIVE_ALL_MESSAGES',
  RECEIVE_MESSAGE: 'pool/RECEIVE_MESSAGE'
};

export const receiveAllMessages = messages => ({
  type: POOL.RECEIVE_ALL_MESSAGES,
  messages
});

export const receiveMessage = message => ({
  type: POOL.RECEIVE_MESSAGE,
  message
});

export const fetchMessages = poolId => dispatch => (
  PoolAPI.fetchMessages(poolId).then(
    res => dispatch(receiveAllMessages(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
