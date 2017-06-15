import { merge, omit } from 'lodash';
import { ERRORS } from './actions';

let _defaultState = {
  numberOfErrors: 0,
  messages: {}
};

const poolReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case ERRORS.RECEIVE:
      let numberOfErrors = state.numberOfErrors + 1;
      return merge({}, state, {
        numberOfErrors,
        messsages: {
          [numberOfErrors]: action.error
        }
      });
    case ERRORS.REMOVE:
      let newErrors = omit(state.messages, action.errorId);
      return merge({}, {
        numberOfErrors: state.numberOfErrors - 1,
        messages: newErrors
      });
    case ERRORS.CLEAR:
      return merge({}, _defaultState);
    default :
      return state;
  }
};

export default poolReducer;
