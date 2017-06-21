import { merge } from 'lodash';
import { POOL } from './actions';

let _defaultState = {
  admin: "Dave",
  leaders: [
    {name: "alex", score: 100, losses: 1, pool: "office pool 1"},
    {name: "david", score: 1, losses: 100, pool: "family pool 2"},
    {name: "raymond", score: 101, losses: 0, pool: "random pool 1"},
    {name: "ditka", score: 23, losses: 2, pool: "office pool 2"},
    {name: "brady", score: 54, losses: 28, pool: "random pool 1"},
    {name: "manning", score: 89, losses: 3, pool: "office pool 1"},
    {name: "cinco", score: 2, losses: 88, pool: "family pool 1"},
    {name: "clowney", score: 103, losses: 3, pool: "family pool 3"},
    {name: "watt", score: 77, losses: 5, pool: "random pool 2"},
    {name: "sanders", score: 44, losses: 3, pool: "random pool 1"}
  ],
  bulletins: {},
  messages: {}
};

const poolReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  console.log(action);
  switch (action.type) {
    case POOL.RECEIVE_MESSAGES:
      return merge({}, state, {
        messages: action.messages
      });
    case POOL.RECEIVE_BULLETINS:
      return merge({}, state, {
        bulletins: action.bulletins
      });
    default :
      return state;
  }
};

export default poolReducer;
