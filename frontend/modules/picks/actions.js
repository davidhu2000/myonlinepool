import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const PICK = {
  RECEIVE: 'pick/RECEIVE',
  UPDATE: 'pick/UPDATE'
};

export const receivePicks = picks => ({
  type: PICK.RECEIVE,
  picks
});

export const updatePicks = picks => ({
  type: PICK.UPDATE,
  picks
});

export const sendPicks = pick => dispatch => (
  APIUtil.sendPicks(pick).then(
    res => dispatch(updatePicks(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const fetchPicks = (week, poolId) => dispatch => (
  APIUtil.fetchPicks(week, poolId).then(
    res => dispatch(receivePicks(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
