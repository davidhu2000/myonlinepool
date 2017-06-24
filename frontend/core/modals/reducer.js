import { merge } from 'lodash';
import { MODAL } from 'common/actions';

let _defaultState = {
  showJoinForm: false,
  showConfirmForm: false
};

const modalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case MODAL.TOGGLE_JOIN_FORM:
      return merge({}, state, { showJoinForm: !state.showJoinForm });
    case MODAL.TOGGLE_CONFIRM_FORM:
      return merge({}, state, { showConfirmForm: !state.showConfirmForm });
    default:
      return state;
  }
};

export default modalReducer;
