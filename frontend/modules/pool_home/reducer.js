import { merge } from 'lodash';
import { POOL } from 'common/actions';

let _defaultState = {
  leaders: [
    { name: "alex", score: 100, losses: 1, pool: "office pool 1" },
    { name: "david", score: 1, losses: 100, pool: "family pool 2" },
    { name: "raymond", score: 101, losses: 0, pool: "random pool 1" },
    { name: "ditka", score: 23, losses: 2, pool: "office pool 2" },
    { name: "brady", score: 54, losses: 28, pool: "random pool 1" },
  ],
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
