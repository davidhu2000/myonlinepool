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

export const shortenString = string => {
  let ret = string;
  if (ret.length > 20) {
    ret = ret.substr(0, 17) + "...";
  }
  return ret;
};

export const shortestString = string => {
  let ret = string;
  if (ret.length > 9) {
    ret = ret.substr(0, 9) + "...";
  }
  return ret;
};
