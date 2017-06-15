import { ERRORS } from './actions';

let _defaultState = [];

const poolReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ERRORS.RECEIVE:
      return [].concat(state, action.errors);
    case ERRORS.CLEAR:
      return _defaultState;
    default :
      return state;
  }
};

export default poolReducer;
