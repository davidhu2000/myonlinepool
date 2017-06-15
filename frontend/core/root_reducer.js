import { combineReducers } from 'redux';
import user from 'modules/user/reducer';
import pool from 'modules/pool/reducer';
import errors from 'common/errors/reducer';

import messages from 'modules/pool/subcomponents/reducer';

const rootReducer = combineReducers({
  user,
  pool,
  messages,
  errors
});

export default rootReducer;
