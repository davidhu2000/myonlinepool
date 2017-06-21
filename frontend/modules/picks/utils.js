/* global $ */

export const sendPicks = (week, poolId) => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { week, poolId }
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
