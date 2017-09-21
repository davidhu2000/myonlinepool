import { receiveAlerts, HOME, receivePrefs } from 'common/actions';
import { processMessages } from 'helpers';

import * as AppAPI from './utils';

export const removeMyPool = poolId => ({
  type: HOME.REMOVE_MY_POOL,
  poolId
});

export const fetchPrefs = () => dispatch => (
  AppAPI.fetchPrefs().then(
    res => dispatch(receivePrefs(res))
  )
);

export const removeMember = (userId, poolId) => dispatch => (
  AppAPI.deleteMember(userId, poolId).then(
    res => {
      dispatch(receiveAlerts(processMessages(res)));
      return dispatch(removeMyPool(poolId));
    },
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
