/* global $ */

export const fetchGames = week => (
  $.ajax({
    method: 'GET',
    url: 'api/game_nfls',
    data: { week }
  })
);

export const addGame = game => (
  $.ajax({
    method: 'POST',
    url: 'api/game_nfls',
    data: { game }
  })
);

export const deleteGame = gameId => (
  $.ajax({
    method: 'POST',
    url: 'api/game_nfls',
    data: { game_id: gameId }
  })
);

