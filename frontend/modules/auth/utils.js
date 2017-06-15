/* global $ */

export const signin = user => (
  $.ajax({
    method: 'POST',
    url: "/api/auth/session",
    data: {
      user: {
        email: user.email,
        password: user.password
      }
    }
  })
);

export const signout = () => (
  $.ajax({
    method: 'DELETE',
    url: "/api/auth/session"
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: "/api/auth/registrations",
    data: {
      user: {
        name: user.name,
        email: user.email,
        password: user.password,
        password_confirmation: user.passwordConfirmation
      }
    }
  })
);

export const confirmEmail = (email, token) => (
  $.ajax({
    method: 'POST',
    url: '/api/auth/registrations/confirm',
    data: {
      user: {
        email,
        confirmation_token: token
      }
    }
  })
);