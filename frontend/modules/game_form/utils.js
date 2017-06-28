/* global $ */

export const updateGame = game => (
  $.ajax({
    method: "PATCH",
    url: `api/game_nfls/${game.gameId}`,
    data: { game }
  })
);
