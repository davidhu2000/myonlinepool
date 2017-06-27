json.set! @week do
  @games.each do |game|
    json.set! game[:id] do
      json.id game[:id]
      json.home_team Team.find_by(id: game[:home_id]).name
      json.away_team Team.find_by(id: game[:away_id]).name
    end
  end 
end
