export const confirmPayment = (identifier, attributes) => {
  return $.ajax({
    method: "PATCH",
    data: {
      pool: {
        identifier,
        ...attributes
      }
    }
  });
};
