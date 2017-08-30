/* global $ */

export const fetchMessages = (poolId, offset) => (
  $.ajax({
    method: "GET",
    url: `api/messages/`,
    data: { pool_id: poolId, offset }
  })
);

export const createMessage = message => (
  $.ajax({
    method: "POST",
    url: `api/messages`,
    data: { message }
  })
);

export const fetchBulletins = (poolId, offset) => (
  $.ajax({
    method: "GET",
    url: `api/bulletins/`,
    data: { pool_id: poolId, offset }
  })
);

export const sendInvite = email => (
  $.ajax({
    method: "POST",
    url: `api/mailers`,
    data: email
  })
);
