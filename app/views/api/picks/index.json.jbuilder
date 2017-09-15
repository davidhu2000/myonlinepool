json.set! @week do 
  @picks.each do |game_id, pick|
    json.set! game_id, pick
  end 
end


json.set! "allPicks" do
  json.set! @week do 
    @picks_view.each do |game_id, pick|
        json.set! game_id, pick
    end
  end
end  
