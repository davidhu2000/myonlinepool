/* global $ */

export const sendPicks = pick => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { pick }
  });
};

export const sendPick = pick => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { pick }
  });
};

export const fetchPicks = (week, poolId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/picks',
    data: { week, poolId }
  });
};
