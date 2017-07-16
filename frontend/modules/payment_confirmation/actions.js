/* global $ */

export const confirmPayment = pool => {
  return $.ajax({
    method: "PATCH",
    url: 'api/payment_confirmation',
    data: {
      pool: {
        identifier: pool.identifier,
        amount_paid: pool.amountPaid,
        transaction_number: pool.transactionNumber
      }
    }
  });
};
