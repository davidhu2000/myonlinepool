import { merge } from 'lodash';
import { PREFS } from 'common/actions';

let _defaultState = {
  year: 2017,
  week: 1
};

const modalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  // console.log(action);
  switch (action.type) {
    case PREFS.RECEIVE_PREFS:
      return merge({}, state, { week: action.week, year: action.year });
    default:
      return state;
  }
};

export default modalReducer;
