/* global $ */

export const fetchMessages = poolId => (
  $.ajax({
    method: "GET",
    url: `api/messages/`,
    data: { pool_id: poolId }
  })
);

export const createMessage = message => (
  $.ajax({
    method: "POST",
    url: `api/messages`,
    data: { message }
  })
);
