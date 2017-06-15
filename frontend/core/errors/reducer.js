import { uniqBy } from 'lodash';

import { ERRORS } from 'common/actions';

let _defaultState = [];

const errorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ERRORS.RECEIVE:
      let newState = state.concat(action.errors);
      return uniqBy(newState, str => str);
    case ERRORS.REMOVE:
      return state.filter(str => str !== action.error);
    case ERRORS.CLEAR:
      return _defaultState;
    default :
      return state;
  }
};

export default errorsReducer;
