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
