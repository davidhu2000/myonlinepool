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

export const fetchAnnoucements = () => (
  $.ajax({
    method: "GET",
    url: "api/announcements"
  })
);
