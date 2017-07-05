/* global $ */

export const deleteBulletin = poolId => (
  $.ajax({
    method: "DELETE",
    url: 'api/bulletins',
    data: { poolId }
  })
);

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
    data: {
      user_id: userId,
      pool_id: poolId
    }
  })
);

export const toggleMembership = (membershipId, poolId) => (
  $.ajax({
    method: "PATCH",
    url: `api/memberships/${membershipId}`,
    data: {
      id: poolId,
      membership_id: membershipId
    }
  })
);
