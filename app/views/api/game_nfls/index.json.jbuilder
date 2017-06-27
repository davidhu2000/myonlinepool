json.set! @week do
  @games.each do |game|
    json.set! game[:id], game
  end 
end
