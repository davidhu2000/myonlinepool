import { receiveAlerts, POOL } from 'common/actions';
import { processMessages } from 'helpers';

// import * as Actions from '../pool/actions';
import * as ModeratorAPI from './utils';

export const updateMemberPaid = memberId => ({
  type: POOL.UPDATE_MEMBERPAID,
  member
});

export const removeMembership = memberId => ({
  type: POOL.REMOVE_MEMBERSHIP,
  memberId
});

export const deleteBulletin = poolId => dispatch => (
  ModeratorAPI.deleteBulletin(poolId).then(
    () => dispatch(receiveAlerts(processMessages(['Bulletin successfully removed.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const createBulletin = bulletin => dispatch => (
  ModeratorAPI.createBulletin(bulletin).then(
    () => dispatch(receiveAlerts(processMessages(['Bulletin successfully created.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const removeMember = (userId, poolId) => dispatch => (
  ModeratorAPI.removeMember(userId, poolId).then(
    () => dispatch(receiveAlerts(processMessages(['Member successfully removed from pool.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const toggleMembership = (membershipId, poolId) => dispatch => (
  ModeratorAPI.toggleMembership(membershipId, poolId).then(
    () => dispatch(receiveAlerts(processMessages(['Membership successfully modified.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
