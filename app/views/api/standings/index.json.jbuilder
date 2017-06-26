json.weeklyStandings do
  json.array!(@weekly_standings) do |weekly|
    json.userName weekly.user.name
    json.correctPicks weekly.correct_picks
    json.wrongPicks weekly.wrong_picks
    json.poolName weekly.pool.title
  end
end

json.seasonStandings do
  json.array!(@season_standings) do |season|
    json.userName season.user.name
    json.correctPicks season.correct_picks
    json.wrongPicks season.wrong_picks
    json.poolName season.pool.title
  end
end