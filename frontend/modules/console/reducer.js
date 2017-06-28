import { merge } from 'lodash';
import { GAME } from './actions';

let _defaultState = {
};

const gameReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case GAME.RECEIVE:
      return merge({}, state, action.games);
    default:
      return state;
  }
};

export default gameReducer;
