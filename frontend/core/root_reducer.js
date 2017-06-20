import { combineReducers } from 'redux';
import user from 'modules/auth/reducer';
import pool from 'modules/pool/reducer';
import alerts from 'core/alerts/reducer';
import home from 'modules/home/reducer';
import picks from 'modules/picks/reducer';

import messages from 'modules/pool/subcomponents/reducer';

const rootReducer = combineReducers({
  user,
  pool,
  messages,
  alerts,
  home,
  picks
});

export default rootReducer;
