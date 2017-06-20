export const sendPicks = picks => (
  $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { picks }
  })
);

export const sendPick = pick => {
  $.ajax({
    method: 'POST',
    url: '/api/picks',
    data: { pick }
  })
};
