import { merge } from 'lodash';
import { PICK } from './actions';

let _defaultState = {
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case PICK.RECEIVE:
      return merge({}, state, action.picks);
    case PICK.UPDATE:
      let newState = merge({}, state);
      Object.values(action.picks).forEach(pick => {
        newState[pick.game_id].pick = pick.pick;
      });

      return newState;
    default:
      return state;
  }
};

export default pickReducer;
