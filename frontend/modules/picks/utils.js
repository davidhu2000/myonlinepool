/* global $ */

export const sendPicks = picks => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { picks }
  });
};

export const fetchPicks = (week, poolId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/picks',
    data: { week, poolId }
  });
};
