/* global $ */

export const fetchMessages = poolId => (
  $.ajax({
    method: "GET",
    url: `api/messages/`,
    data: { pool_id: poolId }
  })
);
