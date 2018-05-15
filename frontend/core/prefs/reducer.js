import { merge } from 'lodash';
import { PREFS } from 'common/actions';

let _defaultState = {
  year: 2018,
  week: 12
};

const modalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case PREFS.RECEIVE_PREFS:
      return merge({}, state, {
        week: action.prefs.week,
        year: action.prefs.year
      });
    case PREFS.UPDATE_PREFS:
      let newState = merge({}, state);
      if (action.prefs.week) {
        newState.week = action.prefs.week;
      }
      if (action.prefs.year) {
        newState.year = action.prefs.year;
      }
      return newState;
    default:
      return state;
  }
};

export default modalReducer;
