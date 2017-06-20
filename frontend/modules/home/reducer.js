import { merge } from 'lodash';
import { HOME } from './actions';

let _defaultState = {
  myPools: {}
};

const homeReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action)
  switch (action.type) {
    case HOME.RECEIVE_MY_POOLS:
      return merge({}, state, {
        myPools: action.pools
      });
    default:
      return state;
  }
};

export default homeReducer;
