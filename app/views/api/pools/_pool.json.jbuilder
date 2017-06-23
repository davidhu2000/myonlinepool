json.extract! pool, :id, :title, :description, :league, :season, :identifier
json.moderatorId pool.moderator_id
json.members do 
  pool.members.each do |member|
    json.set! member.id do 
      json.extract! member, :id, :name
    end
  end
end
json.standings do 
  pool.weekly_result_nfls.each do |res|
    json.set! res.user_id do 
      json.week res.week
      json.season res.season
      json.correctPicks res.correct_picks
      json.userId res.user_id
    end
  end
end
