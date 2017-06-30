/* global $ */

export const fetchTeams = () => (
  $.ajax({
    method: 'GET',
    url: 'api/teams'
  })
);
