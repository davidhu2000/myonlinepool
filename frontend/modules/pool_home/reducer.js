import { merge } from 'lodash';
import { POOL } from 'common/actions';

let _defaultState = {
  bulletins: {},
  messages: {}
};

const poolReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case POOL.RECEIVE_INFORMATION:
      return merge({}, state, action.pool);
    case POOL.RECEIVE_MESSAGES:
      return merge({}, state, {
        messages: action.messages
      });
    case POOL.RECEIVE_BULLETINS:
      return merge({}, state, {
        bulletins: action.bulletins
      });
    case POOL.CLEAR:
      return merge({}, _defaultState);
    default :
      return state;
  }
};

export default poolReducer;
