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
