import { combineReducers } from 'redux';

// Core files
import alerts from 'core/alerts/reducer';
import modals from 'core/modals/reducer';
import prefs from 'core/prefs/reducer';

// Module files
import user from 'modules/auth/reducer';
import pool from 'modules/pool_home/reducer';
import home from 'modules/home/reducer';
import picks from 'modules/picks/reducer';
import games from 'modules/console/reducer';
import teams from 'modules/metrics/reducer';

const rootReducer = combineReducers({
  user,
  pool,
  alerts,
  home,
  picks,
  modals,
  games,
  teams,
  prefs
});

export default rootReducer;
