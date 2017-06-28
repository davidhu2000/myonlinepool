import { receiveAlerts } from 'common/actions';
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
