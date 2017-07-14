/* global $ */

export const changeEmail = email => (
  $.ajax({
    method: 'PATCH',
    url: `/api/auth/users/`,
    data: email
  })
);

export const changeUsername = username => (
  $.ajax({
    method: 'PATCH',
    url: `/api/auth/users/`,
    data: username
  })
);
