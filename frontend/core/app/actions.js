import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as AppAPI from './utils';

export const removeMember = (userId, poolId) => dispatch => (
  AppAPI.deleteMember(userId, poolId).then(
    () => dispatch(receiveAlerts(processMessages(['Member successfully removed from pool.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
