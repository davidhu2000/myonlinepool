import { combineReducers } from 'redux';
import user from 'modules/auth/reducer';
import pool from 'modules/pool/reducer';
import alerts from 'core/alerts/reducer';
import home from 'modules/home/reducer';
import picks from 'modules/picks/reducer';
import games from 'modules/picks/game_reducer';

const rootReducer = combineReducers({
  user,
  pool,
  alerts,
  home,
  picks,
  games
});

export default rootReducer;
