import { ERRORS } from 'common/actions';

let _defaultState = [];

const errorsReducer = (state = _defaultState, action) => {
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

export default errorsReducer;
