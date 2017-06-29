json.set! @week do
  @games.each do |game|
    json.set! game[:id] do
      json.id game[:id]
      json.week game[:week]
      json.home_score game[:home_score]
      json.away_score game[:away_score]
      json.start_time game[:start_time]
      json.spread game[:spread]
      json.line game[:line]
      json.completed game[:completed]
      json.home_team game.home.name
      json.away_team game.away.name
    end
  end 
end
