/* global $ */

export const createPool = pool => (
  $.ajax({
    method: "POST",
    url: "api/pools",
    data: { pool }
  })
);
