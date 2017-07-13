/* global $ */

export const changeEmail = email => (
  $.ajax({
    method: 'PATCH',
    url: `/api/auth/session/${email.user_id}`,
    data: email.email
  })
);

export const changeUsername = username => (
  $.ajax({
    method: 'PATCH',
    url: `/api/auth/session/${username.user_id}`,
    data: username.username
  })
);
