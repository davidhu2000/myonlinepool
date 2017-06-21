/* global $ */

export const createBulletin = bulletin => (
  $.ajax({
    method: "POST",
    url: `api/bulletins`,
    data: { bulletin }
  })
);

export const removeMember = (userId, poolId) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships`,
    data: { userId, poolId }
  })
);