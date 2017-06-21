/* global $ */

export const sendPicks = (week, poolId, type) => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { week, poolId, type }
  });
};

export const sendPick = (pick, type) => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { pick, type }
  });
};

export const fetchPicks = (week, poolId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/picks',
    data: { week, poolId }
  });
};
