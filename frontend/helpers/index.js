export * from './validation_hoc';
export * from './modal_hoc';
export * from './date_helpers';

export const processMessages = (array, statusCode = 200) => {
  let type = 'error';

  if (statusCode >= 200 && statusCode < 300) {
    type = 'success';
  }

  return array.map(message => ({ type, message }));
};

export const hashString = string => {
  let hash = 0;
  let i = 0;
  let len = string.length;

  while (i < len) {
    hash = ((hash << 5) - hash + string.charCodeAt(i++)) << 0;
  }

  return hash;
};

export const calculateSeasonStandings = standings => {
  let seasonStandings = {};

  Object.keys(standings).forEach(weekNum => {
    let weeklyStandings = standings[weekNum];

    Object.keys(weeklyStandings).forEach(userId => {
      let userStanding = weeklyStandings[userId];

      if (!seasonStandings[userId]) {
        seasonStandings[userId] = {
          season: userStanding.season,
          userId: Number(userId)
        };
      }

      if (seasonStandings[userId].correctPicks) {
        seasonStandings[userId].correctPicks += userStanding.correctPicks;
      } else {
        seasonStandings[userId].correctPicks = userStanding.correctPicks;
      }

      if (seasonStandings[userId].wrongPicks) {
        seasonStandings[userId].wrongPicks += userStanding.wrongPicks;
      } else {
        seasonStandings[userId].wrongPicks = userStanding.wrongPicks;
      }
    });
  });

  return seasonStandings;
};
