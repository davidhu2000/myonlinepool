import { uniqBy } from 'lodash';

import { ALERTS } from 'common/actions';

let _defaultState = [];

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ALERTS.RECEIVE:
      let newState = state.concat(action.alerts);
      return uniqBy(newState, alert => alert.message);
    case ALERTS.REMOVE:
      return state.filter(alert => alert.message !== action.alert.message);
    case ALERTS.CLEAR:
      return _defaultState;
    default :
      return state;
  }
};

export default errorsReducer;
