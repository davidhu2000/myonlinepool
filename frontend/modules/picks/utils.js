/* global $ */

export const sendPicks = picks => {
  console.log(picks);
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { picks }
  });
};

export const sendPick = pick => {
  return $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { pick }
  });
};
