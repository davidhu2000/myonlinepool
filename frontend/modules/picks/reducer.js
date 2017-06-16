import {merge} from 'lodash';

let _defaultState = {
  1: { user_id: 1, pool_id: 1, pick: "home" },
  2: { user_id: 1, pool_id: 1, pick: "away" }
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default :
      return state;
  }
};

export default pickReducer;
