import { merge } from 'lodash';
import { RECEIVE_PICKS, RECEIVE_PICK } from './actions';

let _defaultState = {
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PICKS:
      return merge({}, action.picks);
    case RECEIVE_PICK:
      let newState = merge({}, state);
      newState[action.pick.game_id] = action.pick;
      return newState;
    default:
      return state;
  }
};

export default pickReducer;
