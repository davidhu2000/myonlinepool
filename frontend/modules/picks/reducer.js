import { merge } from 'lodash';
import { RECEIVE_PICKS } from './actions';

let _defaultState = {
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
    case RECEIVE_PICKS:
      console.log(action.picks);
      return merge({}, action.picks);
  }
};

export default pickReducer;
