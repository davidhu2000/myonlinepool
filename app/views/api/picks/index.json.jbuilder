@picks.each do |pick|
  json.set! pick.id do 
    json.pick pick.pick 
    json.game_id pick.game_nfl.id
    json.home pick.game_nfl.home.name.capitalize 
    json.away pick.game_nfl.away.name.capitalize
    json.id pick.id
  end 
end 