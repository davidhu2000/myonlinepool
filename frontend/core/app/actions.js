import { receiveAlerts, HOME } from 'common/actions';
import { processMessages } from 'helpers';

import * as AppAPI from './utils';

export const removeMyPool = poolId => ({
  type: HOME.REMOVE_MY_POOL,
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
