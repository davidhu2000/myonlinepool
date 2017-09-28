json.set! @week do 
  @picks.each do |game_id, pick|
    json.set! game_id, pick
  end 
end