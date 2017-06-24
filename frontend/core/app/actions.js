import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import { deleteMember } from './utils';

export const removeMember = (userId, poolId) => dispatch => (
  deleteMember(userId, poolId).then(
    () => dispatch(receiveAlerts(processMessages(['Member successfully removed from pool.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
