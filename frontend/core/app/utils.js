/* global $ */

export const deleteMember = (userId, poolId) => (
  $.ajax({
    method: "DELETE",
    url: `api/memberships`,
    data: {
      user_id: userId,
      pool_id: poolId
    }
  })
);

export const joinPool = (identifier, password) => (
  $.ajax({
    method: "POST",
    url: "api/memberships",
    data: { membership: { identifier, password } }
  })
);
