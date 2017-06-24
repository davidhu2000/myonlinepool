import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as AppAPI from './utils';

export const REMOVE_MY_POOL = 'home/REMOVE_MY_POOL';

export const removeMyPool = poolId => ({
  type: REMOVE_MY_POOL,
  poolId
});

export const removeMember = (userId, poolId) => dispatch => (
  AppAPI.deleteMember(userId, poolId).then(
    () => {
      dispatch(receiveAlerts(processMessages(['Member successfully removed from pool.'])));
      return dispatch(removeMyPool(poolId));
    },
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
