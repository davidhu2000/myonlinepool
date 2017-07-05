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

  let timezones = {
    420: 'PT',
    360: 'MT',
    300: 'CT',
    240: 'ET'
  };

  const checkIfDaylightSavings = () => {
    let jan = new Date(new Date().getFullYear(), 0, 1);
    let jul = new Date(new Date().getFullYear(), 6, 1);
    let offset = Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
    if (offset <= date.getTimezoneOffset()){
      hour += 1;
      return 1;
    }

    return 0;
  };

  let standardOffset = date.getTimezoneOffset() - checkIfDaylightSavings() * 60;

  let currentTimezone = timezones[standardOffset];

  let ampm = hour / 12 >= 1 ? 'PM' : 'AM';
  if (hour !== 12) {
    hour %= 12;
  }

  return {
    year: `${year}`,
    day: `${day}`,
    month: `${month}`,
    hour: `${hour}`,
    minute: `${minute}`,
    date: `${month}/${day}/${year % 100}`,
    time: `${hour}:${minute}`,
    ampm: `${ampm}`,
    timezone: `${currentTimezone}`
  };
};
