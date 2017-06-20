import { merge } from 'lodash';
import { RECEIVE_PICKS } from './actions';

let _defaultState = {
  1: { pick: "home", game_id: 1, home: "Cowboys", away: "Patriots" },
  2: { pick: "home", game_id: 2, home: "Raiders", away: "Seahawks" },
  3: { pick: "home", game_id: 3, home: "Giants", away: "Stealers" },
  4: { pick: "home", game_id: 4, home: "Packers", away: "Broncos" },
  5: { pick: "home", game_id: 5, home: "Vikings", away: "49ers" },
  6: { pick: "home", game_id: 6, home: "Eagles", away: "Redskins" },
  7: { pick: "home", game_id: 7, home: "Lions", away: "Texans" },
  8: { pick: "", game_id: 8, home: "Saints", away: "Panthers" },
  9: { pick: "home", game_id: 9, home: "Bears", away: "Cardinals" },
  10: { pick: "home", game_id: 10, home: "Browns", away: "Falcons" },
  11: { pick: "home", game_id: 11, home: "Ravens", away: "Jets" },
  12: { pick: "", game_id: 12, home: "Bills", away: "Rams" },
  13: { pick: "home", game_id: 13, home: "Chargers", away: "Chiefs" },
  14: { pick: "", game_id: 14, home: "Colts", away: "Bengals" },
  15: { pick: "home", game_id: 15, home: "Dolphins", away: "Buccaneers" },
  16: { pick: "home", game_id: 16, home: "Titans", away: "Jaguars" }
};

const pickReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
    case RECEIVE_PICKS:
      return merge({}, action.picks);
  }
};

export default pickReducer;
