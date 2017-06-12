/* global $ */

export const signin = user => (
  $.ajax({
    method: 'POST',
    url: "/api/users/sign_in",
    data: { user }
  })
);

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: "/api/users/sign_out",
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: "/api/users",
    data: { user }
  })
);