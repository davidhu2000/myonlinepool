import { receiveAlerts } from 'common/actions';
import { processMessages } from 'helpers';

import * as BulletinAPI from './utils';

export const createBulletin = bulletin => dispatch => (
  BulletinAPI.createBulletin(bulletin).then(
    () => dispatch(receiveAlerts(processMessages(['Bulletin successfully created.']))),
    err => dispatch(receiveAlerts(processMessages(err.responseJSON, err.status)))
  )
);
