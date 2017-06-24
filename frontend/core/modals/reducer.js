import { merge } from 'lodash';
import { MODAL } from 'common/actions';

let _defaultState = {
  showJoinForm: false,
  showConfirmForm: false
};

const modalReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MODAL.SHOW_JOIN_FORM:
      return merge({}, state, { showJoinForm: true });
    case MODAL.HIDE_JOIN_FORM:
      return merge({}, state, { showJoinForm: false });
    case MODAL.SHOW_CONFIRM_FORM:
      return merge({}, state, { showConfirmForm: true });
    case MODAL.HIDE_CONFIRM_FORM:
      return merge({}, state, { showConfirmForm: false });
    default:
      return state;
  }
};

export default modalReducer;
