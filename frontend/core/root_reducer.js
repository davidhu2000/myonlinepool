import { combineReducers } from 'redux';
import user from 'modules/auth/reducer';
import pool from 'modules/pool/reducer';
import alerts from 'core/alerts/reducer';
import home from 'modules/home/reducer';
import picks from 'modules/picks/reducer';

const rootReducer = combineReducers({
  user,
  pool,
  alerts,
  home,
  picks
});

export default rootReducer;
