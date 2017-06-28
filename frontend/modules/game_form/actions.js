import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';
import * as APIUtil from './utils';

export const updateGame = game => dispatch => (
  APIUtil.updateGame(game).then(
    () => dispatch(receiveAlerts(processMessages(['Game successfully updated.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
