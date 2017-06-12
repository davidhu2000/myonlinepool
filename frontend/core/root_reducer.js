import { combineReducers } from 'redux';
import userReducer from 'modules/user/reducer';
import poolReducer from 'modules/pool/reducer';
import messageReducer from 'modules/pool/subcomponents/reducer';

const rootReducer = combineReducers({
  user: userReducer,
  pool: poolReducer,
  messages: messageReducer
});

export default rootReducer;
