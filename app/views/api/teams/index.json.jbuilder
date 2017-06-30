@teams.each do |team|
  json.set! team[:id] do
    team
  end
end 
