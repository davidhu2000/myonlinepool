export * from './dropdown';
export * from './validation_hoc';
export * from './modal_hoc';

export const processMessages = (array, statusCode = 200) => {
  let type = 'error';

  if (statusCode >= 200 && statusCode < 300) {
    type = 'success';
  }

  return array.map(message => ({ type, message }));
};

export const timeFromNow = date => {
  if (typeof date !== 'number') {
    throw new Error("Date needs to be passed in as time in milliseconds.");
  }

  let durationsInSeconds = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1
  };

  let seconds = Math.floor((new Date() - new Date(date)) / 1000);

  if (seconds < 60) {
    return 'just now';
  }

  let types = ['year', 'month', 'day', 'hour', 'minute', 'second'];

  for (let idx = 0; idx < types.length; idx++) {
    let num = Math.floor(seconds / durationsInSeconds[types[idx]]);
    if (num >= 1) {
      let type = types[idx];
      if (num > 1) type += 's';
      return `${num} ${type} ago`;
    }
  }
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

export const parseTime = string => {
  let date = new Date(string);
  date = new Date(date.toString());

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }

  let ampm = hour / 12 >= 1 ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }

  let timezones = {
    420: 'PT',
    360: 'MT',
    300: 'CT',
    240: 'ET'
  };

  let currentTimezone = timezones[date.getTimezoneOffset()];

  return {
    date: `${month}/${day}/${year % 100}`,
    time: `${hour}:${minute}`,
    ampm: `${ampm}`,
    timezone: `${currentTimezone}`
  };
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
