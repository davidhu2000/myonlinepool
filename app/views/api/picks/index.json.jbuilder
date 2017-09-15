json.set! @week do 
  @picks.each do |game_id, pick|
    json.set! game_id, pick
  end 
end


json.set! "o" do
  @picks_view.each do |game_id, pick|
      json.set! game_id, pick
  end
end  
