/* global $ */

export const updateBuyin = (buyIn, poolId) => (
  $.ajax({
    method: "PATCH",
    url: `api/pools/${poolId}`,
    data: {
      buy_in: buyIn,
      pool_id: poolId
    }
  })
);

export const updateName = (name, poolId) => (
  $.ajax({
    method: "PATCH",
    url: `api/pools/${poolId}`,
    data: {
      pool_name: name,
      pool_id: poolId
    }
  })
);

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
      pool_id: poolId,
      membership_id: membershipId
    }
  })
);
