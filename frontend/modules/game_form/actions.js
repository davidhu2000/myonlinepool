import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const updateGame = game => dispatch => (
  APIUtil.updateGame(game).then(
    res => dispatch(receiveAlerts(processMessages(res))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
