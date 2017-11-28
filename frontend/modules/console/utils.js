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

export const sendUpdatePrefs = prefs => (
  $.ajax({
    method: 'POST',
    url: 'api/sysprefs/',
    data: { prefs }
  })
);

export const updateSchedule = () => (
  $.ajax({
    method: 'POST',
    url: 'api/game_nfls',
    data: {}
  })
);

