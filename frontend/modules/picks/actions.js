import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const RECEIVE_PICKS = "RECEIVE_PICKS";
export const RECEIVE_PICK = "RECEIVE_PICK";

export const receivePicks = picks => ({
  type: RECEIVE_PICKS,
  picks
});

export const receivePick = pick => ({
  type: RECEIVE_PICK,
  pick
});

export const sendPick = pick => dispatch => (
  APIUtil.sendPick(pick).then(
    res => dispatch(receivePick(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const sendPicks = pick => dispatch => (
  APIUtil.sendPicks(pick).then(
    res => dispatch(receivePicks(res))
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
