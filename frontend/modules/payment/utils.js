/* global $ */

export const updatePool = pool => (
  $.ajax({
    method: "PATCH",
    url: `api/pools/${pool.id}`,
    data: {
      pool: {
        amount_paid: pool.amountPaid,
        max_size: pool.maxSize
      }
    }
  })
);
