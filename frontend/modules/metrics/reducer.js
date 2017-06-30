import { merge } from 'lodash';
import { TEAM } from './actions';

let _defaultState = {
};

const teamReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case TEAM.RECEIVE:
      return merge({}, state, action.teams);
    default:
      return state;
  }
};

export default teamReducer;
