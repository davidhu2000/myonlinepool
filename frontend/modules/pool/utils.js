/* global $ */

export const fetchPoolInformation = poolId => (
  $.ajax({
    method: "GET",
    url: `api/pools/${poolId}`,
  })
);
