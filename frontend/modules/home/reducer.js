import { merge } from 'lodash';
import { HOME } from 'common/actions';

let _defaultState = {
  myPools: {},
  announcements: [],
  weeklyStandings: [],
  seasonStandings: []
};

const homeReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action)
  switch (action.type) {
    case HOME.RECEIVE_MY_POOLS:
      return merge({}, state, {
        myPools: action.pools
      });
    case HOME.REMOVE_MY_POOL:
      let newState = merge({}, state);
      delete newState.myPools[action.poolId];
      return newState;
    case HOME.RECEIVE_ANNOUNCEMENTS:
      return merge({}, state, {
        announcements: action.announcements
      });
    case HOME.RECEIVE_SITE_STANDINGS:
      return merge({}, state, {
        weeklyStandings: action.standings.weeklyStandings,
        seasonStandings: action.standings.seasonStandings
      });
    default:
      return state;
  }
};

export default homeReducer;
