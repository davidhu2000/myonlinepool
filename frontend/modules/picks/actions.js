import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const RECEIVE_PICKS = "RECEIVE_PICKS";

export const receivePicks = picks => ({
  type: RECEIVE_PICKS,
  picks
});

export const sendPicks = picks => dispatch => (
  APIUtil.sendPicks(picks).then(
    res => dispatch(receivePicks(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const fetchPicks = week => dispatch => (
  APIUtil.fetchPicks(week).then(
    res => dispatch(receivePicks(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
