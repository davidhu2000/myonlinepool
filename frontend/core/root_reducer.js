import { combineReducers } from 'redux';
import user from 'modules/auth/reducer';
import pool from 'modules/pool/reducer';
import alerts from 'core/alerts/reducer';

import messages from 'modules/pool/subcomponents/reducer';

const rootReducer = combineReducers({
  user,
  pool,
  messages,
  alerts
});

export default rootReducer;
