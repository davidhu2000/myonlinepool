import * as APIUtil from './utils';

export const RECEIVE_PICKS = "RECEIVE_PICKS";

export const receivePicks = picks => ({
  type: RECEIVE_PICKS,
  picks
});

export const sendPicks = picks => dispatch => (
  APIUtil.sendPicks(picks).then(
    res => {
      return dispatch(receivePicks(res));
    }
  )
);
