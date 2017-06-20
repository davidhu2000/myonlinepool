import { merge } from 'lodash';
import { HOME } from './actions';

let _defaultState = {
  myPools: {},
  announcements: []
};

const homeReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action)
  switch (action.type) {
    case HOME.RECEIVE_MY_POOLS:
      return merge({}, state, {
        myPools: action.pools
      });
    case HOME.RECEIVE_ANNOUNCEMENTS:
      return merge({}, state, {
        announcements: action.announcements
      });
    default:
      return state;
  }
};

export default homeReducer;
