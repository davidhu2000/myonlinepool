/* global $ */

export const login = user => (
  $.ajax({
    method: 'POST',
    url: "/api/users/sign_in",
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: "/api/users/sign_out",
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: "/api/users/signup",
    data: { user }
  })
);
