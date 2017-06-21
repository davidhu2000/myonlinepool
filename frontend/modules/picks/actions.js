import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const RECEIVE_PICKS = "RECEIVE_PICKS";

export const receivePicks = picks => ({
  type: RECEIVE_PICKS,
  picks
});

export const sendPicks = (week, poolId) => dispatch => (
  APIUtil.sendPicks(week, poolId).then(
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
