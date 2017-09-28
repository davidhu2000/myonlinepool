import { receiveAlerts, receiveUpdates } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const GAME = {
  RECEIVE: 'game/RECEIVE'
};

export const receiveGames = games => ({
  type: GAME.RECEIVE,
  games
});

export const fetchGames = week => dispatch => (
  APIUtil.fetchGames(week).then(
    res => dispatch(receiveGames(res))
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);

export const updatePrefs = prefs => dispatch => (
  APIUtil.sendUpdatePrefs(prefs).then(
    res => {
      dispatch(receiveAlerts(processMessages(["Succesfully updated week number."], 200)));
      return dispatch(receiveUpdates(res));
    }
  ).fail(
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
