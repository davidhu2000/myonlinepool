/* global $ */
export const fetchMyPools = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pools'
  })
);

export const joinPool = (identifier, password) => (
  $.ajax({
    method: "POST",
    url: "api/memberships",
    data: { membership: { identifier, password } }
  })
);

export const fetchAnnouncements = () => (
  $.ajax({
    method: "GET",
    url: "api/announcements"
  })
);

export const fetchSiteStandings = () => (
  $.ajax({
    method: "GET",
    url: "api/standings"
  })
);
