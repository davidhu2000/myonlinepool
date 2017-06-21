/* global $ */

export const createBulletin = bulletin => (
  $.ajax({
    method: "POST",
    url: `api/bulletins`,
    data: { bulletin }
  })
);
