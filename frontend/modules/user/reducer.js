import { AUTH } from './actions';

let _defaultState = null;

const userReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action)
  switch (action.type) {
    case AUTH.RECEIVE_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
