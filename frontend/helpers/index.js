export * from './dropdown';
export * from './validation_hoc';

export const processMessages = (array, statusCode) => {
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
