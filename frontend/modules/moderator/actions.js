import { receiveAlerts, POOL } from 'common/actions';
import { processMessages } from 'helpers';

// import * as Actions from '../pool/actions';
import * as ModeratorAPI from './utils';

export const updateMemberPaid = memberId => ({
  type: POOL.UPDATE_MEMBERPAID,
  memberId
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
    () => dispatch(removeMembership(userId)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const toggleMembership = (membershipId, poolId) => dispatch => (
  ModeratorAPI.toggleMembership(membershipId, poolId).then(
    () => dispatch(updateMemberPaid(membershipId)),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
