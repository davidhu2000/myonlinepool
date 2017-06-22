import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as PoolAPI from './utils';

export const POOL = {
  RECEIVE_INFORMATION: 'pool/RECEIVE_INFORMATION',
  RECEIVE_MESSAGES: 'pool/RECEIVE_MESSAGES',
  RECEIVE_BULLETINS: 'pool/RECEIVE_BULLETINS'
};

export const receivePoolInformation = pool => ({
  type: POOL.RECEIVE_INFORMATION,
  pool
});

export const fetchPoolInformation = poolId => dispatch => (
  PoolAPI.fetchPoolInformation(poolId).then(
    res => dispatch(receivePoolInformation(res)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
