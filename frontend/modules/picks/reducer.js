import { merge } from 'lodash';
import { RECEIVE_PICKS } from './actions';

let _defaultState = {
  1: { game_id: 1, user_id: 1, pool_id: 1, pick: "home" },
  2: { game_id: 2, user_id: 1, pool_id: 1, pick: "away" }
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
    case RECEIVE_PICKS:
      return merge({}, action.picks);
  }
};

export default pickReducer;
