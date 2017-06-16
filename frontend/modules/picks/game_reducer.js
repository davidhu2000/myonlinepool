import {merge} from 'lodash';

let _defaultState = {
  1: { home: "Cowboys", away: "Patriots" },
  2: { home: "Raiders", away: "Seahawks" },
  3: { home: "Giants", away: "Stealers" },
  4: { home: "Packers", away: "Broncos" },
  5: { home: "Vikings", away: "49ers" },
  6: { home: "Eagles", away: "Redskins" },
  7: { home: "Lions", away: "Texans" },
  8: { home: "Saints", away: "Panthers" },
  9: { home: "Bears", away: "Cardinals" },
  10: { home: "Browns", away: "Falcons" },
  11: { home: "Ravens", away: "Jets" },
  12: { home: "Bills", away: "Rams" },
  13: { home: "Chargers", away: "Chiefs" },
  14: { home: "Colts", away: "Bengals" },
  15: { home: "Dolphins", away: "Buccaneers" },
  16: { home: "Titans", away: "Jaguars" }
};

const gameReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default :
      return state;
  }
};

export default gameReducer;
