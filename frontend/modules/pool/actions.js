import { hashHistory } from 'react-router';
import { receiveAlerts, POOL } from 'common/actions';
import { processMessages } from 'helpers';

import * as PoolAPI from './utils';

export const receivePoolInformation = pool => ({
  type: POOL.RECEIVE_INFORMATION,
  pool
});

export const clearPoolInformation = () => ({
  type: POOL.CLEAR
});

export const fetchPoolInformation = poolId => dispatch => (
  PoolAPI.fetchPoolInformation(poolId).then(
    res => dispatch(receivePoolInformation(res)),
    err => {
      hashHistory.replace('/home');
      dispatch(clearPoolInformation());
      return dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)));
    }
  )
);
